import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';

import {View} from '~/Components';

const sender = {
  _id: 2,
  name: 'Bot',
  avatar: 'https://placeimg.com/140/140/any',
};

const user = {
  _id: 1,
  name: 'User',
  avatar: 'https://placeimg.com/140/140/any',
};

export default (): React.ReactElement => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 3,
        text: '잠시만 기다려주세요.',
        createdAt: new Date(),
        user: sender,
      },
      {
        _id: 2,
        text: '백신은 어디서 접종해야 하나요?',
        createdAt: new Date(),
        user,
      },
      {
        _id: 1,
        text: '안녕하세요 VAPP입니다. 궁금하신 사항이 있다면 물어보세요.',
        createdAt: new Date(),
        user: sender,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: IMessage[]) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View fill safe>
      <GiftedChat messages={messages} user={user} onSend={onSend} />
    </View>
  );
};
