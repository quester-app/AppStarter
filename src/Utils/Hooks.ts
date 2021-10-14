import {
  DependencyList,
  EffectCallback,
  Reducer as ReactReducer,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

enum ActionType {
  START = 'START',
  CANCEL = 'CANCEL',
  FULFILL = 'FULFILL',
  REJECT = 'REJECT',
}

type Action<T> =
  // | {type: ActionType.START; payload: () => Promise<void>}
  | {type: ActionType.START}
  | {type: ActionType.CANCEL}
  | {type: ActionType.FULFILL; payload: T}
  | {type: ActionType.REJECT; payload: Error};
//  & {meta: {counter: number; [meta: string]: any}};

type State<T> = {isLoading: boolean; value?: T; error?: Error};

type Reducer<T> = ReactReducer<State<T>, Action<T>>;
// type ReducerOptions<T> = {
//   reducer: <T>(state: State<T>, action: Action<T>) => State<T>;
//   initialState: State<T>;
// };

type EffectAction<T> = {
  start: () => void;
  fulfill: (value: T) => void;
  reject: (error: Error) => void;
  cancel: () => void;
};

export const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case ActionType.START:
      return {...state, isLoading: true};
    case ActionType.FULFILL:
      return {...state, isLoading: false, value: action.payload};
    case ActionType.REJECT:
      return {...state, isLoading: false, error: action.payload};
    case ActionType.CANCEL:
      return {...state, isLoading: false};
    default:
      throw new Error('Unhandled action');
  }
};

const initialState = {
  isLoading: false,
};

export const usePromiseEffect = <T>(
  effect: (action: EffectAction<T>) => ReturnType<EffectCallback>,
  deps?: DependencyList,
): State<T> => {
  // const options: ReducerOptions<T> = {reducer, initialState};
  const [state, dispatch] = useReducer<Reducer<T>>(reducer, initialState);
  const action: EffectAction<T> = useMemo(
    () => ({
      start: () => dispatch({type: ActionType.START}),
      fulfill: (value: T) =>
        dispatch({type: ActionType.FULFILL, payload: value}),
      reject: (error: Error) =>
        dispatch({type: ActionType.REJECT, payload: error}),
      cancel: () => dispatch({type: ActionType.CANCEL}),
    }),
    [],
  );

  useEffect(
    () => {
      action.start();
      const effectCallback = effect(action);
      return () => {
        action.cancel();
        if (effectCallback) {
          effectCallback();
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );

  return state;
};
