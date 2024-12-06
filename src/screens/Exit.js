import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as nativebase from 'native-base';
import HeaderMain from '../modules/HeaderMain';

const ExitScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { colorMode } = nativebase.useColorMode();
  const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  const cardBackground = colorMode === 'light' ?  'Seasalt.hex': 'GunmetalLight.hex'; 
  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <nativebase.Box flex={1} bg={backgroundColor}>
      {/* Header */}
      <HeaderMain navigation={navigation}/>

      {/* Main Content */}
      <nativebase.VStack flex={1} p={4} space={3}>
        <nativebase.Box bg={cardBackground} p={4} borderRadius="lg" alignItems="center">
          <nativebase.Text fontSize="md" fontWeight="bold">120 SYS</nativebase.Text>
          <nativebase.Text fontSize="md" fontWeight="bold">80 DIA</nativebase.Text>
          <nativebase.Text fontSize="md" fontWeight="bold">20 Pulse</nativebase.Text>
        </nativebase.Box>
        <nativebase.Box bg={cardBackground} p={4} borderRadius="lg" alignItems="center">
          <nativebase.Text fontSize="md" fontWeight="bold">%SpO2</nativebase.Text>
          <nativebase.Text fontSize="lg" color="#555">96</nativebase.Text>
          <nativebase.Text fontSize="md" fontWeight="bold">BPM</nativebase.Text>
          <nativebase.Text fontSize="lg" color="#555">86</nativebase.Text>
        </nativebase.Box>
        <nativebase.Box bg={cardBackground} p={4} borderRadius="lg" alignItems="center">
          <nativebase.Text fontSize="md" fontWeight="bold">106 mg/dL</nativebase.Text>
        </nativebase.Box>
      </nativebase.VStack>

      {/* Exit Modal */}
      <nativebase.Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <nativebase.Modal.Content>
          <nativebase.Modal.CloseButton />
          <nativebase.Modal.Header>Confirm Exit</nativebase.Modal.Header>
          <nativebase.Modal.Body>
            <nativebase.Text>Are you sure you want to exit the app?</nativebase.Text>
            <nativebase.Text>The device will be unpaired</nativebase.Text>
          </nativebase.Modal.Body>
          <nativebase.Modal.Footer>
            <nativebase.Button colorScheme="red" onPress={handleExit}>
              YES
            </nativebase.Button>
            <nativebase.Button onPress={() => setModalVisible(false)}>
              NO
            </nativebase.Button>
          </nativebase.Modal.Footer>
        </nativebase.Modal.Content>
      </nativebase.Modal>

      {/* Exit Button */}
      <nativebase.Pressable 
      background={colorMode==='light'?'amber.200':'teal.800'}
      w={"120px"}
      borderRadius={"lg"}
      alignSelf={"center"}
      mb={10}
      p={2}
      borderWidth={0.5}
      borderColor={colorMode==='light'?'amber.300':'teal.900'}
      onPress={() => setModalVisible(true)}>
        <nativebase.Text>Simulate Exit</nativebase.Text>
      </nativebase.Pressable>
    </nativebase.Box>
  );
};

export default ExitScreen;
