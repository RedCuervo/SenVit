import React, { createContext, useState, useContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: 'Juanita Perengana López',
    age: '60',
    city: 'Aguascalientes',
    address: 'Santa Mónica 201',
    bloodGlucose: '125 mg/dl',
    bloodOxygenation: '97%',
    heartRate: '70',
    profileImage: require('../../assets/avatarImages/Avatar1.png'),
  });

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
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