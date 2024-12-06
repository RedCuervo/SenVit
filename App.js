import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext'; // Importa el AuthProvider

// pantallas
import HomeScreenNoDevice from './src/screens/HomeScreenNoDevice';
import FirstTimeScreen from './src/screens/FirstTimeScreen';
import ConnectionScreen from './src/screens/ConnectionScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
   /* envuelve el componente raiz para que funcione la autenticacion*/
    <AuthProvider> 
      <NativeBaseProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="FirstScreen" // Define la pantalla inicial
              screenOptions={{
                headerShown: false, // Oculta el encabezado globalmente
              }}
            >
              <Stack.Screen name="FirstScreen" component={FirstTimeScreen} />
              <Stack.Screen name="HomeScreen1" component={HomeScreenNoDevice} />
              <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
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
