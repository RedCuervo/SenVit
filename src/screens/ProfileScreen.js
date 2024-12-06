
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as nativebase from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext'; // Add this import


const ProfileScreen = () => {
  const { colorMode } = nativebase.useColorMode();
    const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  const { profileData, setProfileData } = useProfile(); // Add this hook
  const navigation = useNavigation();

  return (
    <nativebase.Box flex={1} bg={backgroundColor}
    >
      <nativebase.HStack
        alignItems="center"
        justifyContent="center"
        h={100}
        w="full"
        position="relative"
        safeArea
        bg={backgroundColor}
      >
        <nativebase.Pressable
          onPress={() => navigation.goBack()}
          position="absolute"
          top="60px"
          left={5}
          w={10}
          h={10}
          justifyContent="center"
          alignItems="center"
        >
          <nativebase.ArrowBackIcon color="black" size="md" />
        </nativebase.Pressable>
        <nativebase.Box safeArea>
          <nativebase.Text fontWeight="bold" fontSize="xl">Patient Information</nativebase.Text>
        </nativebase.Box>
      </nativebase.HStack>
      
      {/* Profile Information */}
      <nativebase.Box 
      safeAreaX="6"
      safeAreaTop="4"
      >
      <nativebase.VStack bg="#e1f5fe" p={4} borderRadius="lg" alignItems="center" mb={4}>
        <nativebase.Image
          source={profileData.profileImage}
          alt="Profile Image"
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
        />
        <nativebase.Text fontSize="md" fontWeight="bold" color="#333">{profileData.name}</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666">Status: Active</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666">Associated hospital: UMF 5</nativebase.Text>
      </nativebase.VStack>

      {/* Personal Data */}
      <nativebase.VStack mb={4}>
        <nativebase.Text fontSize="md" fontWeight="bold" color="#333" mb={2}>Personal data:</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666" mb={1}>Age: {profileData.age} years</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666" mb={1}>City: {profileData.city}</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666" mb={1}>Address: {profileData.address}</nativebase.Text>
        <nativebase.Button
          mt={2}
          bg="#4CAF50"
          width="50%"
          alignSelf="center"
          onPress={() => navigation.navigate('EditProfile', {
            onSave: (updatedData) => {
              setProfileData(updatedData); // Use the context setter
            }
          })}
        >
          Edit
        </nativebase.Button>
      </nativebase.VStack>

      {/* Last Measurements */}
      <nativebase.VStack mb={4}>
        <nativebase.Text fontSize="md" fontWeight="bold" color="#333" mb={2}>Last measurements:</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666" mb={1}>Blood glucose: {profileData.bloodGlucose}</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666" mb={1}>Blood oxygenation: {profileData.bloodOxygenation}</nativebase.Text>
        <nativebase.Text fontSize="sm" color="#666" mb={1}>Heart rate: {profileData.heartRate}</nativebase.Text>
      </nativebase.VStack>
      </nativebase.Box>
    </nativebase.Box>
  );
};

export default ProfileScreen;
