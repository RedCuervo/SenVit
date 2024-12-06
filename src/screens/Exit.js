import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as NativeBase from 'native-base';

const ExitScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <NativeBase.Box flex={1} bg="#f5f5f5">
      {/* Header */}
      <NativeBase.HStack bg="#fff" p={4} alignItems="center">
        <NativeBase.IconButton
          icon={<NativeBase.Icon as={NativeBase.MaterialIcons} name="arrow-back" size="md" color="#007bff" />}
          onPress={() => navigation.navigate('MoreScreen')}
        />
        <NativeBase.Text fontSize="lg" fontWeight="bold">
          Welcome John Doe
        </NativeBase.Text>
      </NativeBase.HStack>

      {/* Main Content */}
      <NativeBase.VStack flex={1} p={4} space={3}>
        <NativeBase.Box bg="#fff" p={4} borderRadius="lg" alignItems="center">
          <NativeBase.Text fontSize="md" fontWeight="bold">120 SYS</NativeBase.Text>
          <NativeBase.Text fontSize="md" fontWeight="bold">80 DIA</NativeBase.Text>
          <NativeBase.Text fontSize="md" fontWeight="bold">20 Pulse</NativeBase.Text>
        </NativeBase.Box>
        <NativeBase.Box bg="#fff" p={4} borderRadius="lg" alignItems="center">
          <NativeBase.Text fontSize="md" fontWeight="bold">%SpO2</NativeBase.Text>
          <NativeBase.Text fontSize="lg" color="#555">96</NativeBase.Text>
          <NativeBase.Text fontSize="md" fontWeight="bold">BPM</NativeBase.Text>
          <NativeBase.Text fontSize="lg" color="#555">86</NativeBase.Text>
        </NativeBase.Box>
        <NativeBase.Box bg="#fff" p={4} borderRadius="lg" alignItems="center">
          <NativeBase.Text fontSize="md" fontWeight="bold">106 mg/dL</NativeBase.Text>
        </NativeBase.Box>
      </NativeBase.VStack>

      {/* Exit Modal */}
      <NativeBase.Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <NativeBase.Modal.Content>
          <NativeBase.Modal.CloseButton />
          <NativeBase.Modal.Header>Confirm Exit</NativeBase.Modal.Header>
          <NativeBase.Modal.Body>
            <NativeBase.Text>Are you sure you want to exit the app?</NativeBase.Text>
            <NativeBase.Text>The device will be unpaired</NativeBase.Text>
          </NativeBase.Modal.Body>
          <NativeBase.Modal.Footer>
            <NativeBase.Button colorScheme="red" onPress={handleExit}>
              YES
            </NativeBase.Button>
            <NativeBase.Button onPress={() => setModalVisible(false)}>
              NO
            </NativeBase.Button>
          </NativeBase.Modal.Footer>
        </NativeBase.Modal.Content>
      </NativeBase.Modal>

      {/* Exit Button */}
      <NativeBase.IconButton
        icon={<NativeBase.Icon as={NativeBase.MaterialIcons} name="more-horiz" size="lg" color="#000" />}
        position="absolute"
        top={4}
        right={4}
        onPress={() => setModalVisible(true)}
      />
    </NativeBase.Box>
  );
};

export default ExitScreen;
