import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

import {BackgroundLoader, Portal, Text, View} from '~/Components';
import {RootStack} from '~/Constants';
import {Posts} from '~/Constants/API';
import {Post} from '~/Models';
import {fetchFunction} from '~/Utils/API';
import {usePromiseEffect} from '~/Utils/Hooks';

declare const global: {HermesInternal: null | {}};

export default (): React.ReactElement => {
  const navigation = useNavigation();

  // const [isLoading, setIsLoading] = useState(false);
  // const [posts, setPosts] = useState<Post[]>([]);
  const {
    isLoading,
    value: posts,
    error,
  } = usePromiseEffect<Post[]>(({fulfill, reject}) => {
    const abortController = new AbortController();
    fetchFunction<Post[]>({url: Posts.list, abortController})
      .then(value => fulfill(value))
      .catch(e => {
        reject(e);
        throw e;
      });

    return () => {
      if (!abortController.signal.aborted) {
        abortController.abort();
      }
    };
  }, []);

  return (
    <>
      {global.HermesInternal == null ? null : (
        <View style={{position: 'absolute', right: 0}}>
          <Text>Engine: Hermes</Text>
        </View>
      )}
      <View style={{paddingHorizontal: 20}} fill scroll>
        {isLoading && (
          <Portal>
            <BackgroundLoader />
          </Portal>
        )}
        {!isLoading && (
          <>
            {error && <Text>{error}</Text>}
            {posts?.splice(0, 5)?.map((post, index) => (
              <View key={post.id}>
                <Text small>{`${index + 1}. ${post.title}`}</Text>
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
