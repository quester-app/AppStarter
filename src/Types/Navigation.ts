import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStack} from '~/Constants';

export type RootStackParamList = {
  [RootStack.Home]: undefined;
  [RootStack.Page2]: undefined;
  [RootStack.IdentityVerification]: undefined;
} & {
  [P in keyof typeof RootStack]: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
