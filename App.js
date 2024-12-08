import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext'; // Importa el AuthProvider
import { useState } from 'react';
import { useColorModeValue } from 'native-base';


// pantallas
import HomeScreenNoDevice from './src/screens/HomeScreenNoDevice';
import FirstTimeScreen from './src/screens/FirstTimeScreen';
import ConnectionScreen from './src/screens/ConnectionScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import MoreScreen from './src/screens/MoreScreen';
import EmergencyContacts from './src/screens/EmergencyContacts';
import EditProfileScreen from './src/screens/EditProfileScreen';
import Settings from './src/screens/Settings';
import customTheme from './src/theme/colors';
import About from './src/screens/About';
import TermsAndConditions from './src/screens/TermsAndConditions';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import Notifications from './src/screens/Notifications';
import HelpScreen from './src/screens/HelpScreen';
import HistoryScreen from './src/screens/History';
import ExitScreen from './src/screens/Exit';
import ProfileScreen from './src/screens/ProfileScreen';

import { ProfileProvider } from './src/context/ProfileContext';


const Stack = createStackNavigator();

const colors=customTheme.colors;
const App = () => {


  const backgroundColor= useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);


  return (
<AuthProvider>
  <NativeBaseProvider theme={customTheme}>
    <ProfileProvider>
      <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator
              initialRouteName="FirstScreen"
              screenOptions={{
                headerShown: false, // Oculta el encabezado globalmente
              }}>
              <Stack.Screen name="FirstScreen" component={FirstTimeScreen} />
              <Stack.Screen name="HomeScreen1" component={HomeScreenNoDevice} />
              <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="MoreScreen" component={MoreScreen} />
              <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="EditProfile" component={EditProfileScreen} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
              <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
              <Stack.Screen name="Notifications" component={Notifications} />
              <Stack.Screen name="Help" component={HelpScreen} />
              <Stack.Screen name="History" component={HistoryScreen} />
              <Stack.Screen name="MainScreen" component={ExitScreen} />
            </Stack.Navigator>
          
        </NavigationContainer>
      </View>
    </ProfileProvider>
  </NativeBaseProvider>
</AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
