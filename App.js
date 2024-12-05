import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, theme, VStack } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

import HomeScreenNoDevice from './src/screens/HomeScreenNoDevice';
import FirstTimeScreen from './src/screens/FirstTimeScreen';
import ConnectionScreen from './src/screens/ConnectionScreen';
import MoreScreen from './src/screens/MoreScreen';
import EmergencyContacts from './src/screens/EmergencyContacts';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  const [mockUserData]=useState({
    username:"Pedro Pascal",
  })
  return (
    <View style={styles.container}>
      <NativeBaseProvider backgroundColor="white">
      <NavigationContainer>
        <VStack flex={1} bg={"white"}>
        <Stack.Navigator>
          <Stack.Screen name="FirstScreen" component={FirstTimeScreen} options={{headerShown:false}} />
          <Stack.Screen name="HomeScreen1" component={HomeScreenNoDevice} options={{headerShown:false}}
          initialParams={{username:mockUserData.username}}
          />
          <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} options={{headerShown: false}}/>
          <Stack.Screen name="MoreScreen" component={MoreScreen} options={{headerShown: false}}/>
          <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{headerShown: false}}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
        </VStack>
      </NavigationContainer>
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
