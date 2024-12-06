import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as NativeBase from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext'; // Add this import

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { profileData, setProfileData } = useProfile(); // Add the hook

  // Initialize state with values from context
  const [name, setName] = useState(profileData.name);
  const [age, setAge] = useState(profileData.age);
  const [city, setCity] = useState(profileData.city);
  const [address, setAddress] = useState(profileData.address);
  const [bloodGlucose, setBloodGlucose] = useState(profileData.bloodGlucose);
  const [bloodOxygenation, setBloodOxygenation] = useState(profileData.bloodOxygenation);
  const [heartRate, setHeartRate] = useState(profileData.heartRate);
  const [profileImage, setProfileImage] = useState(profileData.profileImage);

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
      profileImage,
    };

    // Update the context instead of using route params
    setProfileData(updatedProfile);
    navigation.goBack();
  };

  return (
    <NativeBase.Box flex={1} bg="#fff" p={4}>
      {/* Header with back button */}
      <NativeBase.HStack alignItems="center" space={4} pb={4}>
        <NativeBase.IconButton
          icon={<MaterialIcons name="arrow-back" size={24} color="black" />}
          onPress={() => navigation.goBack()}
          variant="ghost"
        />
        <NativeBase.Text fontSize="lg" fontWeight="bold">
          Edit Profile
        </NativeBase.Text>
      </NativeBase.HStack>

      {/* Profile Information */}
      <NativeBase.VStack bg="#e1f5fe" p={4} borderRadius="lg" alignItems="center" mb={4}>
        <NativeBase.Image
          source={profileImage ? profileImage : require('../../assets/avatarImages/Avatar1.png')}
          alt="Profile Image"
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
        />
        <NativeBase.Input
          variant="outline"
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
          w="80%"
          mb={2}
        />
      </NativeBase.VStack>

      {/* Personal Data */}
      <NativeBase.VStack mb={4}>
        <NativeBase.Text fontSize="md" fontWeight="bold" color="#333" mb={2}>Personal data:</NativeBase.Text>
        <NativeBase.Input
          variant="outline"
          placeholder="Enter age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          w="100%"
          mb={2}
        />
        <NativeBase.Input
          variant="outline"
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
          w="100%"
          mb={2}
        />
        <NativeBase.Input
          variant="outline"
          placeholder="Enter address"
          value={address}
          onChangeText={setAddress}
          w="100%"
          mb={2}
        />
      </NativeBase.VStack>

      {/* Last Measurements */}
      <NativeBase.VStack mb={4}>
        <NativeBase.Text fontSize="md" fontWeight="bold" color="#333" mb={2}>Last measurements:</NativeBase.Text>
        <NativeBase.Input
          variant="outline"
          placeholder="Enter blood glucose"
          value={bloodGlucose}
          onChangeText={setBloodGlucose}
          w="100%"
          mb={2}
        />
        <NativeBase.Input
          variant="outline"
          placeholder="Enter blood oxygenation"
          value={bloodOxygenation}
          onChangeText={setBloodOxygenation}
          w="100%"
          mb={2}
        />
        <NativeBase.Input
          variant="outline"
          placeholder="Enter heart rate"
          value={heartRate}
          onChangeText={setHeartRate}
          keyboardType="numeric"
          w="100%"
          mb={2}
        />
      </NativeBase.VStack>

      {/* Save Button */}
      <NativeBase.Button
        mt={2}
        bg="#4CAF50"
        width="50%"
        alignSelf="center"
        onPress={handleSave}
      >
        Save
      </NativeBase.Button>
    </NativeBase.Box>
  );
};

export default EditProfileScreen;
