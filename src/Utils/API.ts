import queryString from 'query-string';

type FetchParams = {
  url?: string;
  data?: object;
  method?: string;
  headers?: object;
  auth?: boolean;
  abortController?: AbortController;
};

export class TimeoutError extends Error {
  constructor(time = 10000, message = 'Timeout error occurred') {
    super(`${message}: ${time}ms`);
    Object.setPrototypeOf(this, TimeoutError.prototype);
    this.name = 'TimeoutError';
  }
}

export const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// type SessionType = {
//   secretKey: string;
//   publicKey: string;
//   nonce: number;
// };

// export const getAuthHeaders = ({data = {}}: FetchParams) => {
//   const session = LocalStorage.get<SessionType>();
//   if (!session) {
//     throw new SessionError();
//   }
//   const {secretKey, publicKey, nonce} = session;

//   localStorage.set<SessionType>({secretKey, publicKey, nonce: nonce + 1});

//   const token = getAuthToken({
//     ...(Object.keys(data).length > 0 && {payload: {query: data}}),
//     secretKey,
//     publicKey,
//     nonce,
//   });

//   return {Authorization: token};
// };

export const abortTimeout = (
  time = 10000,
): [() => Promise<void>, () => void] => {
  let timeoutPointer: NodeJS.Timeout | null = null;

  const startAbortTimeout = (): Promise<void> =>
    new Promise((resolve, reject) => {
      timeoutPointer = setTimeout(() => {
        reject(new TimeoutError(time));
      }, time);
    });

  const clearAbortTimeout: () => void = () => {
    if (timeoutPointer) {
      clearTimeout(timeoutPointer);
      timeoutPointer = null;
    }
  };

  return [startAbortTimeout, clearAbortTimeout];
};

export const fetchFunction = async <T>(params: FetchParams): Promise<T> => {
  const {
    url: paramURL = '',
    data,
    method,
    headers: paramHeaders,
    abortController: paramAbortController,
  } = params;

  const abortController = paramAbortController || new AbortController();
  const {signal} = abortController;
  const [startAbortTimeout, clearAbortTimeout] = abortTimeout();

  let body: string | undefined = JSON.stringify(data);
  const headers = {...DEFAULT_HEADERS, ...paramHeaders};
  let url = paramURL;

  if (method === 'GET' && Object.keys(data || {}).length > 0) {
    const query = queryString.stringify(data || {});
    url = `${url}?${query}`;
    body = undefined;
  }

  const requestInit: RequestInit = {method, headers, signal, body};
  const request: Request = new Request(url, requestInit);
  const fetchPromise = fetch(request);

  try {
    const response = await Promise.race([fetchPromise, startAbortTimeout()]);

    let result;
    if (response instanceof Response) {
      clearAbortTimeout();

      const contentType = response.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        result = await response.json();
      } else if (contentType?.includes('image')) {
        result = await response.blob();
      } else if (contentType?.includes('application/x-www-form-urlencoded')) {
        result = await response.formData();
      } else {
        result = await response.text();
      }

      if (response.ok) {
        return result;
      }
    }

    throw result;
  } catch (e) {
    if (e instanceof TimeoutError && !signal.aborted) {
      abortController.abort();
    }
    throw e;
  } finally {
    clearAbortTimeout();
  }
};
