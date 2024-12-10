import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as nativebase from 'native-base';
import HeaderMain from '../modules/HeaderMain';

const ExitScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { colorMode } = nativebase.useColorMode();
  const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  const cardBackground = colorMode === 'light' ? 'Seasalt.hex' : 'GunmetalLight.hex';

  const labels = ['SYS', 'DIA', 'Pulse', '%SpO2', 'BPM', 'mg/dl'];
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);
  const [values, setValues] = useState({
    SYS: 0,
    DIA: 0,
    Pulse: 0,
    '%SpO2': 0,
    BPM: 0,
    'mg/dl': 0,
  });

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        setModalVisible(true);
        return true; // Prevents default back action
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const generateValues = (label) => {
    switch (label) {
      case 'SYS':
        return Math.floor(Math.random() * (140 - 90 + 1)) + 90; // 90-140
      case 'DIA':
        return Math.floor(Math.random() * (90 - 60 + 1)) + 60; // 60-90
      case 'Pulse':
        return Math.floor(Math.random() * (100 - 50 + 1)) + 50; // 50-100
      case 'BPM':
        return Math.floor(Math.random() * (180 - 60 + 1)) + 60; // 60-180
      case '%SpO2':
        return Math.floor(Math.random() * (100 - 95 + 1)) + 95; // 95-100
      case 'mg/dl':
        return Math.floor(Math.random() * (200 - 70 + 1)) + 70; // 70-200
      default:
        return 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentLabelIndex + 1) % labels.length;
      const nextLabel = labels[nextIndex];
      setValues((prevValues) => ({
        ...prevValues,
        [nextLabel]: generateValues(nextLabel),
      }));
      setCurrentLabelIndex(nextIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLabelIndex]);

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <nativebase.Box flex={1} bg={backgroundColor}>
      {/* Header */}
      <HeaderMain navigation={navigation} />

      {/* Main Content */}
      <nativebase.VStack flex={1} p={4} space={3}>
        <nativebase.Box bg={cardBackground} p={4} borderRadius="lg" alignItems="center">
          <nativebase.Text fontSize="md" fontWeight="bold">{values.SYS} SYS</nativebase.Text>
          <nativebase.Text fontSize="md" fontWeight="bold">{values.DIA} DIA</nativebase.Text>
          <nativebase.Text fontSize="md" fontWeight="bold">{values.Pulse} Pulse</nativebase.Text>
        </nativebase.Box>
        <nativebase.Box bg={cardBackground} p={4} borderRadius="lg" alignItems="center">
          <nativebase.Text fontSize="md" fontWeight="bold">%SpO2</nativebase.Text>
          <nativebase.Text fontSize="lg">{values['%SpO2']}</nativebase.Text>
          <nativebase.Text fontSize="md" fontWeight="bold">BPM</nativebase.Text>
          <nativebase.Text fontSize="lg">{values.BPM}</nativebase.Text>
        </nativebase.Box>
        <nativebase.Box bg={cardBackground} p={4} borderRadius="lg" alignItems="center">
          <nativebase.Text fontSize="md" fontWeight="bold">{values['mg/dl']} mg/dL</nativebase.Text>
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
    </nativebase.Box>
  );
};

export default ExitScreen;
