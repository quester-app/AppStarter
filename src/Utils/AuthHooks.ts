import * as SecureStore from 'expo-secure-store';
import {Reducer as ReactReducer, useMemo, useReducer} from 'react';

enum ActionType {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

type State = {
  isLoading: boolean;
  isSignIn: boolean;
  userToken: string | null;
  error?: Error;
};

type Action =
  | {
      type: ActionType.RESTORE_TOKEN;
      token: State['userToken'];
      // isSignIn: State['isSignIn'];
    }
  | {
      type: ActionType.SIGN_IN;
      // isSignIn: State['isSignIn'];
      token: State['userToken'];
    }
  | {
      type: ActionType.SIGN_OUT;
      // isSignIn: State['isSignIn'];
      // userToken: State['userToken'];
    };

type Reducer = ReactReducer<State, Action>;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isSignIn: true,
        isLoading: false,
      };
    case ActionType.SIGN_IN:
      return {...state, userToken: action.token, isSignIn: true};
    case ActionType.SIGN_OUT:
      return {...state, userToken: null, isSignIn: false};
    default:
      throw new Error('Unhandled action');
  }
};

const initialState = {
  isLoading: false,
  isSignIn: false,
  userToken: null,
};

type Dispatch = {
  restoreToken: () => Promise<void>;
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
};

export const useAuthReducer = (): [State, Dispatch] => {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = useMemo(
    () => ({
      restoreToken: async () => {
        let userToken: string | null = null;

        try {
          userToken = await SecureStore.getItemAsync('userToken');
        } catch (e) {
          // Restoring token failed
        }

        // After restoring token, we may need to validate it in production apps

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        dispatch({type: ActionType.RESTORE_TOKEN, token: userToken});
      },
      signIn: () =>
        dispatch({type: ActionType.SIGN_IN, token: 'dummy-auth-token'}),
      signOut: () => dispatch({type: ActionType.SIGN_OUT}),
      signUp: () => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: ActionType.SIGN_IN, token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return [state, actions];
};
