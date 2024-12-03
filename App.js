import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, theme, VStack } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreenNoDevice from './src/screens/HomeScreenNoDevice';
import FirstTimeScreen from './src/screens/FirstTimeScreen';
import ConnectionScreen from './src/screens/ConnectionScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NativeBaseProvider backgroundColor="white">
      <NavigationContainer>
        <VStack flex={1} bg={"white"}>
        <Stack.Navigator>
          <Stack.Screen name="FirstScreen" component={FirstTimeScreen} />
          <Stack.Screen name="HomeScreen1" component={HomeScreenNoDevice} />
          <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} options={{headerShown: false}}/>
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
