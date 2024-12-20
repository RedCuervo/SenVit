import React, { useState } from 'react';

import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as nativebase from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext'; // Add this import
import HeaderTitle from '../modules/HeaderTitle';

const EditProfileScreen = () => {
  
  const navigation = useNavigation();
  const { profileData, updateProfile } = useProfile(); // Add the hook
  
  // Initialize state with values from context
  const [name, setName] = useState(profileData.name);
  const [age, setAge] = useState(profileData.age);
  const [city, setCity] = useState(profileData.city);
  const [address, setAddress] = useState(profileData.address);
  const [bloodGlucose, setBloodGlucose] = useState(profileData.bloodGlucose);
  const [bloodOxygenation, setBloodOxygenation] = useState(profileData.bloodOxygenation);
  const [heartRate, setHeartRate] = useState(profileData.heartRate);
  const [profileImage, setProfileImage] = useState(profileData.profileImage);

  const handleSave = async () => {
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
      profileImage,
    };

    // Update the context instead of using route params
    try {
      await updateProfile(updatedProfile);
      navigation.goBack();
    } catch (error) {
      alert("Error updating profile. Please try again.");
      console.error(error);
    }
    navigation.goBack();
  };
  const { colorMode } = nativebase.useColorMode();
  const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  return (
    <nativebase.Box flex={1} bg={backgroundColor}>
      <HeaderTitle
      title="Personal Data:"
      navigation={navigation}
      />

      {/* Profile Information */}
      <nativebase.Box
      safeAreaX="6"
      safeAreaTop="4"
      >
      <nativebase.VStack bg="#e1f5fe" p={4} borderRadius="lg" alignItems="center" mb={4}>
        <nativebase.Image
          source={profileImage ? profileImage : require('../../assets/avatarImages/Avatar1.png')}
          alt="Profile Image"
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
        />
        <nativebase.Input
          variant="outline"
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
          w="80%"
          mb={2}
          color={"black"}
        />
      </nativebase.VStack>

      {/* Personal Data */}
      <nativebase.VStack mb={4}>
        <nativebase.Text fontSize="md" fontWeight="bold" mb={2}>Personal data:</nativebase.Text>
        <nativebase.Input
          variant="outline"
          placeholder="Enter age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          w="100%"
          mb={2}
        />
        <nativebase.Input
          variant="outline"
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
          w="100%"
          mb={2}
        />
        <nativebase.Input
          variant="outline"
          placeholder="Enter address"
          value={address}
          onChangeText={setAddress}
          w="100%"
          mb={2}
        />
      </nativebase.VStack>

      {/* Last Measurements */}
      <nativebase.VStack mb={4}>
        <nativebase.Text fontSize="md" fontWeight="bold"  mb={2}>Last measurements:</nativebase.Text>
        <nativebase.Input
          variant="outline"
          placeholder="Enter blood glucose"
          value={bloodGlucose}
          onChangeText={setBloodGlucose}
          w="100%"
          mb={2}
        />
        <nativebase.Input
          variant="outline"
          placeholder="Enter blood oxygenation"
          value={bloodOxygenation}
          onChangeText={setBloodOxygenation}
          w="100%"
          mb={2}
        />
        <nativebase.Input
          variant="outline"
          placeholder="Enter heart rate"
          value={heartRate}
          onChangeText={setHeartRate}
          keyboardType="numeric"
          w="100%"
          mb={2}
        />
      </nativebase.VStack>

      {/* Save Button */}
      <nativebase.Button
        mt={2}
        bg="#4CAF50"
        width="50%"
        alignSelf="center"
        onPress={handleSave}
      >
        Save
      </nativebase.Button>
      </nativebase.Box>
    </nativebase.Box>
  );
};
export default EditProfileScreen;
