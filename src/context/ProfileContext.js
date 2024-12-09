import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    city: '',
    address: '',
    bloodGlucose: '128',
    bloodOxygenation: '200',
    heartRate: '70BPM',
    profileImage: require('../../assets/avatarImages/Avatar1.png'),
  });

  useEffect(() => {
    if (user) {
      setProfileData(prev => ({
        ...prev,
        name: user.displayName || ''
      }));
    } else {
      setProfileData({
        name: '',
        age: '',
        city: '',
        address: '',
        bloodGlucose: '128',
        bloodOxygenation: '200',
        heartRate: '70BPM',
        profileImage: require('../../assets/avatarImages/Avatar1.png'),
      });
    }
  }, [user]);

  // Simplified updateProfile function without auth check
  const updateProfile = (newData) => {
    setProfileData(prev => ({
      ...prev,
      ...newData
    }));
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
