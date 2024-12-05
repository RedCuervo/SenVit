import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { HStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // Para el ícono de la flecha atrás

const EditProfileScreen = ({ navigation, route }) => {
  const [name, setName] = useState(route.params.profileData.name);
  const [age, setAge] = useState(route.params.profileData.age);
  const [city, setCity] = useState(route.params.profileData.city);
  const [address, setAddress] = useState(route.params.profileData.address);
  const [bloodGlucose, setBloodGlucose] = useState(route.params.profileData.bloodGlucose);
  const [bloodOxygenation, setBloodOxygenation] = useState(route.params.profileData.bloodOxygenation);
  const [heartRate, setHeartRate] = useState(route.params.profileData.heartRate);
  const [profileImage, setProfileImage] = useState(route.params.profileData.profileImage); // Manejar la imagen de perfil

  const handleSave = () => {
    if (!name || !age || !city || !address || !bloodGlucose || !bloodOxygenation || !heartRate) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedProfile = {
      name,
      age,
      city,
      address,
      bloodGlucose,
      bloodOxygenation,
      heartRate,
      profileImage, // Asegúrate de incluir la imagen al actualizar el perfil
    };

    // Se pasa el perfil actualizado de vuelta a ProfileScreen
    route.params.setProfileData(updatedProfile);
    navigation.goBack();  // Regresa a la pantalla de perfil
  };

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <HStack alignItems="center" style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </HStack>

      {/* Profile Information */}
      <View style={styles.profileSection}>
        {/* Imagen de perfil: se usa Image de NativeBase con require */}
        <Image 
          source={profileImage ? profileImage : require('../../assets/avatarImages/Avatar1.png')} // Si no hay imagen, usamos una predeterminada
          style={styles.profileImage} 
        />
        <TextInput 
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
        />
      </View>

      {/* Personal Data */}
      <View style={styles.dataSection}>
        <Text style={styles.sectionTitle}>Personal data:</Text>
        <TextInput 
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter age"
        />
        <TextInput 
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Enter city"
        />
        <TextInput 
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
        />
      </View>

      {/* Last Measurements */}
      <View style={styles.dataSection}>
        <Text style={styles.sectionTitle}>Last measurements:</Text>
        <TextInput 
          style={styles.input}
          value={bloodGlucose}
          onChangeText={setBloodGlucose}
          placeholder="Enter blood glucose"
        />
        <TextInput 
          style={styles.input}
          value={bloodOxygenation}
          onChangeText={setBloodOxygenation}
          placeholder="Enter blood oxygenation"
        />
        <TextInput 
          style={styles.input}
          value={heartRate}
          onChangeText={setHeartRate}
          keyboardType="numeric"
          placeholder="Enter heart rate"
        />
      </View>

      {/* Save Button */}
      <Button 
        title="Save"
        onPress={handleSave}
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    backgroundColor: '#e1f5fe',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  dataSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default EditProfileScreen;
