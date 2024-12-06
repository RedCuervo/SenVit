import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as nativeBase from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext'; // Add this import

const ProfileScreen = () => {
  const { profileData, setProfileData } = useProfile(); // Add this hook
  const navigation = useNavigation();

  return (
    <nativeBase.Box flex={1} bg="#fff" p={4}>
      {/* Header with back button */}
      <nativeBase.HStack alignItems="center" space={4} pb={4}>
        <nativeBase.IconButton
          icon={<MaterialIcons name="arrow-back" size={24} color="black" />}
          onPress={() => navigation.goBack()}
          variant="ghost"
        />
        <nativeBase.Text fontSize="lg" fontWeight="bold">
          Patient Information
        </nativeBase.Text>
      </nativeBase.HStack>

      {/* Profile Information */}
      <nativeBase.VStack bg="#e1f5fe" p={4} borderRadius="lg" alignItems="center" mb={4}>
        <nativeBase.Image
          source={profileData.profileImage}
          alt="Profile Image"
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
        />
        <nativeBase.Text fontSize="md" fontWeight="bold" color="#333">{profileData.name}</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666">Status: Active</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666">Associated hospital: UMF 5</nativeBase.Text>
      </nativeBase.VStack>

      {/* Personal Data */}
      <nativeBase.VStack mb={4}>
        <nativeBase.Text fontSize="md" fontWeight="bold" color="#333" mb={2}>Personal data:</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666" mb={1}>Age: {profileData.age} years</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666" mb={1}>City: {profileData.city}</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666" mb={1}>Address: {profileData.address}</nativeBase.Text>
        <nativeBase.Button 
          mt={2}
          bg="#4CAF50"
          width="50%"
          alignSelf="center"
          onPress={() => navigation.navigate('EditProfileScreen', { 
            onSave: (updatedData) => {
              setProfileData(updatedData); // Use the context setter
            }
          })}
        >
          Edit
        </nativeBase.Button>
      </nativeBase.VStack>

      {/* Last Measurements */}
      <nativeBase.VStack mb={4}>
        <nativeBase.Text fontSize="md" fontWeight="bold" color="#333" mb={2}>Last measurements:</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666" mb={1}>Blood glucose: {profileData.bloodGlucose}</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666" mb={1}>Blood oxygenation: {profileData.bloodOxygenation}</nativeBase.Text>
        <nativeBase.Text fontSize="sm" color="#666" mb={1}>Heart rate: {profileData.heartRate}</nativeBase.Text>
      </nativeBase.VStack>
    </nativeBase.Box>
  );
};

export default ProfileScreen;
