import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importación necesaria

const ExitScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Hook para navegación

  const handleExit = () => {
    BackHandler.exitApp(); // Salir de la app
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Flecha de retroceso */}
        <TouchableOpacity onPress={() => navigation.navigate('MoreScreen')}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Welcome Jhon Doe</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.label}>120 SYS</Text>
          <Text style={styles.label}>80 DIA</Text>
          <Text style={styles.label}>20 Pulse</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>%SpO2</Text>
          <Text style={styles.value}>96</Text>
          <Text style={styles.label}>BPM</Text>
          <Text style={styles.value}>86</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>106 mg/dL</Text>
        </View>
      </View>

      {/* Exit Modal */}
      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to exit the app?</Text>
            <Text style={styles.modalText}>The device will be unpaired</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={handleExit}>
                <Text style={styles.buttonText}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Exit Button */}
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.exitText}>•••</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#007bff',
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
    color: '#555',
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  exitText: {
    fontSize: 18,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
