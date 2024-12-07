import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, theme, VStack } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { useColorModeValue } from 'native-base';


import HomeScreenNoDevice from './src/screens/HomeScreenNoDevice';
import FirstTimeScreen from './src/screens/FirstTimeScreen';
import ConnectionScreen from './src/screens/ConnectionScreen';
import MoreScreen from './src/screens/MoreScreen';
import EmergencyContacts from './src/screens/EmergencyContacts';
import ProfileScreen from './src/screens/ProfileScreen';
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
import EditProfileScreen from './src/screens/EditProfileScreen';
import { ProfileProvider } from './src/context/ProfileContext';

const Stack = createStackNavigator();

const colors=customTheme.colors;
const App = () => {


  const backgroundColor= useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);


  return (
    <View style={styles.container}>
      <NativeBaseProvider theme={customTheme}>
        <ProfileProvider>
      <NavigationContainer>
        <VStack flex={1} bg={backgroundColor}>
        <Stack.Navigator>
          <Stack.Screen name="FirstScreen" component={FirstTimeScreen} options={{headerShown:false}} />
          <Stack.Screen name="HomeScreen1" component={HomeScreenNoDevice} options={{headerShown:false}}
          />
          <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} options={{headerShown: false}}/>
          <Stack.Screen name="MoreScreen" component={MoreScreen} options={{headerShown: false}}/>
          <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
          <Stack.Screen name="About" component={About} options={{headerShown: false}}/>
          <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{headerShown: false}}/>
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown: false}}/>
          <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}}/>
          <Stack.Screen name="Help" component={HelpScreen} options={{headerShown: false}}/>
          <Stack.Screen name="History" component={HistoryScreen} options={{headerShown: false}}/>
          <Stack.Screen name="MainScreen" component={ExitScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
        </VStack>
      </NavigationContainer>
      </ProfileProvider>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
