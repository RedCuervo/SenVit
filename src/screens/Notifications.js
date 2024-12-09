import React, { useState } from 'react';
import * as nativebase from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import HeaderTitle from '../modules/HeaderTitle';
import {Ionicons} from '@expo/vector-icons';

const Notifications = ({ navigation }) => {
  const {colorMode}=nativebase.useColorMode();
  const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  const cardBackground = colorMode === 'light' ?  'Seasalt.hex': 'GunmetalLight.hex';  

  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Battery Low', message: 'Your device battery is running low', timestamp: new Date().toLocaleString() },
    { id: '2', title: 'Connection Lost', message: 'Device connection has been lost', timestamp: new Date().toLocaleString() },
  ]);

  const deleteNotification = (rowKey) => {
    const newData = notifications.filter(item => item.id !== rowKey);
    setNotifications(newData);
  };

  const renderNotification = ({ item }) => (
    <nativebase.Box
      bg={cardBackground}
      p={4}
      mx={6}
      my={2}
      rounded="md"
      shadow={2}
    >
      <nativebase.VStack space={2}>
        <nativebase.Text bold fontSize="md">{item.title}</nativebase.Text>
        <nativebase.Text>{item.message}</nativebase.Text>
        <nativebase.Text fontSize="xs" color="coolGray.500">{item.timestamp}</nativebase.Text>
      </nativebase.VStack>
    </nativebase.Box>
  );

  const renderHiddenItem = ({ item }) => (
    <nativebase.HStack flex={1} justifyContent="flex-end" alignItems="center">
      <nativebase.Pressable
        onPress={() => deleteNotification(item.id)}
        justifyContent="center"
        alignItems="center"
        w={20}
        h={30}
        
      >
        <Ionicons 
                    name="trash"
                    size={24} // or use "md" if you prefer NativeBase sizing
                    color={"red.600"}
                />
      </nativebase.Pressable>
    </nativebase.HStack>
  );
  const addNewNotification = () => {
    const newNotification = {
      id: String(notifications.length + 1),
      title: 'New Message',
      message: 'This is a simulated notification',
      timestamp: new Date().toLocaleString(),
    };
    
    setNotifications(prevNotifications => [newNotification, ...prevNotifications]);
  };


  return (
    <nativebase.Box flex={1} bg={backgroundColor}>
      <HeaderTitle
      title="Notifications"
      navigation={navigation}
      />

      <SwipeListView
        data={notifications}
        renderItem={renderNotification}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={item => item.id}
        rightOpenValue={-75} // Desplaza 75px a la izquierda
        disableRightSwipe
        ListEmptyComponent={
          <nativebase.Box flex={1} justifyContent="center" alignItems="center">
            <nativebase.Text color="coolGray.500">No notifications yet</nativebase.Text>
          </nativebase.Box>
        }
      />

      <nativebase.Button onPress={() => addNewNotification()} m={4}>
        Test Notification
      </nativebase.Button>
    </nativebase.Box>
  );
};

export default Notifications;
