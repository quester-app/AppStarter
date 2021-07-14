import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';

export type Props = React.ComponentProps<typeof View> &
  React.ComponentProps<typeof SafeAreaView> &
  React.ComponentProps<typeof ScrollView> &
  React.ComponentProps<typeof KeyboardAvoidingView> & {
    children?: React.ReactNode;
    row?: boolean;
    fill?: boolean;
    // view type
    safe?: boolean;
    scroll?: boolean;
    keyboardAvoiding?: boolean;
    onRefresh?: () => void;
    refreshing?: boolean;
    animated?: boolean;
  };

export default (props: Props): React.ReactElement => {
  const {
    children,
    style: customStyle,
    row,
    fill,
    safe,
    scroll,
    keyboardAvoiding,
    onRefresh,
    refreshing,
    ...rest
  } = props;
  const style: ViewStyle = {
    flexDirection: row ? 'row' : 'column',
    flex: fill ? 1 : 0,
  };

  const Component = (safe && SafeAreaView) || (scroll && ScrollView) || View;

  const componentProps: Props = {
    style: [style, customStyle],
    children,
    ...(scroll && {
      keyboardShouldPersistTaps: Platform.OS === 'ios' ? 'handled' : 'always',
      showsVerticalScrollIndicator: false,
      ...(onRefresh && {
        refreshControl: (
          <RefreshControl
            refreshing={refreshing || false}
            onRefresh={onRefresh}
          />
        ),
      }),
    }),
    ...(keyboardAvoiding && {
      behavior: Platform.OS === 'ios' ? 'padding' : 'height',
    }),
    ...rest,
  };

  return !keyboardAvoiding ? (
    <Component {...componentProps} />
  ) : (
    <KeyboardAvoidingView {...componentProps} />
  );
};
