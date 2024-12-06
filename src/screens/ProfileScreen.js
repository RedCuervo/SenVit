import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, HStack, VStack, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // Para el ícono de la flecha atrás

const ProfileScreen = ({ navigation, route }) => {
  // Estado para almacenar los datos del perfil
  const [profileData, setProfileData] = useState({
    name: 'Juanita Perengana López',
    age: '60',
    city: 'Aguascalientes',
    address: 'Santa Mónica 201',
    bloodGlucose: '125 mg/dl',
    bloodOxygenation: '97%',
    heartRate: '70',
    profileImage: require('../../assets/avatarImages/Avatar1.png'), // Uso de require para imagen local
  });

  // Actualizar los datos si se reciben cambios desde EditProfileScreen
  useEffect(() => {
    if (route.params?.updatedProfile) {
      setProfileData(route.params.updatedProfile);
    }
  }, [route.params?.updatedProfile]);

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <HStack alignItems="center" style={styles.header}>
        <Button 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
          variant="ghost"
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </Button>
        <Text style={styles.headerText}>Patient Information</Text>
      </HStack>

      {/* Profile Information */}
      <VStack style={styles.profileSection} alignItems="center">
        {/* Imagen de perfil: se usa nativebase.Image */}
        <Image 
          source={profileData.profileImage} // Aquí usamos el source modificado
          alt="Profile Image"
          style={styles.profileImage} 
        />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.status}>Status: Active</Text>
        <Text style={styles.hospital}>Associated hospital: UMF 5</Text>
      </VStack>

      {/* Personal Data */}
      <VStack style={styles.dataSection}>
        <Text style={styles.sectionTitle}>Personal data:</Text>
        <Text style={styles.dataItem}>Age: {profileData.age} years</Text>
        <Text style={styles.dataItem}>City: {profileData.city}</Text>
        <Text style={styles.dataItem}>Address: {profileData.address}</Text>
        <Button 
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfileScreen', { profileData, setProfileData })}
        >
          Edit
        </Button>
      </VStack>

      {/* Last Measurements */}
      <VStack style={styles.dataSection}>
        <Text style={styles.sectionTitle}>Last measurements:</Text>
        <Text style={styles.dataItem}>Blood glucose: {profileData.bloodGlucose}</Text>
        <Text style={styles.dataItem}>Blood oxygenation: {profileData.bloodOxygenation}</Text>
        <Text style={styles.dataItem}>Heart rate: {profileData.heartRate}</Text>
      </VStack>
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
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  hospital: {
    fontSize: 14,
    color: '#666',
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
  dataItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    width: '50%',
    alignSelf: 'center',
  },
});

export default ProfileScreen;
