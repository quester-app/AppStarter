import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {ActivityIndicator, Button} from 'react-native';

import {BackdropView, Text, View} from '~/Components';
import {RootStack} from '~/Constants';
import {Posts} from '~/Constants/API';
import {Post} from '~/Models';
import {Portal} from '~/Provider';
import {fetchFunction} from '~/Utils/API';
import {usePromiseEffect} from '~/Utils/Hooks';

declare const global: {HermesInternal: null | {}};

export default (): React.ReactElement => {
  const navigation = useNavigation();

  // const [isLoading, setIsLoading] = useState(false);
  // const [posts, setPosts] = useState<Post[]>([]);
  const {isLoading, value: posts, error} = usePromiseEffect<Post[]>(
    ({fulfill, reject}) => {
      const abortController = new AbortController();
      fetchFunction<Post[]>({url: Posts.list, abortController})
        .then((value) => fulfill(value))
        .catch((e) => {
          reject(e);
          throw e;
        });

      return () => {
        if (!abortController.signal.aborted) {
          abortController.abort();
        }
      };
    },
    [],
  );

  const PortalItem = memo(
    (): React.ReactElement => (
      <BackdropView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" />
          <Text xLarge>Loading</Text>
        </View>
      </BackdropView>
    ),
  );

  return (
    <>
      {global.HermesInternal == null ? null : (
        <View style={{position: 'absolute', right: 0}}>
          <Text>Engine: Hermes</Text>
        </View>
      )}
      <View style={{paddingHorizontal: 20}} fill>
        {isLoading && (
          <Portal>
            <PortalItem />
          </Portal>
        )}
        {!isLoading && (
          <>
            {error && <Text>{error}</Text>}
            {posts?.map((post) => (
              <View key={post.id}>
                <Text>{post.title}</Text>
                <Text light xSmall>
                  {post.body}
                </Text>
              </View>
            ))}
          </>
        )}
      </View>
      <Button
        title="Button"
        onPress={() => navigation.navigate(RootStack.Page2)}
      />
    </>
  );
};
