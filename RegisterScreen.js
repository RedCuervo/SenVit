import React, { useState } from 'react';
import { VStack, Box, Input, Button, Text, Divider, Center, Checkbox, Pressable, Icon, HStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../firebase'; // Configuración de Firebase
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, sendEmailVerification } from "firebase/auth";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación

WebBrowser.maybeCompleteAuthSession();

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useAuth(); // Contexto de autenticación

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '194740284635-b9qvidpnm8thj59hlmh940sa3cfviv2f.apps.googleusercontent.com',
    redirectUri: 'http://localhost:8081',
  });

  const handleGoogleSignUp = async () => {
    try {
      // Inicia el flujo de autenticación
      const result = await promptAsync({ useProxy: false, windowFeatures: '' });

      if (result.type === 'success') {
        const { id_token } = result.params;
        const credential = GoogleAuthProvider.credential(id_token);

        // Autentica al usuario con Firebase
        const userCredential = await signInWithCredential(auth, credential);
        setUser(userCredential.user); // Actualiza el estado global del usuario
        console.log('Google Sign-In successful:', userCredential.user);

        // Redirigir a la pantalla principal
        navigation.navigate('HomeScreenNoDevice');
      } else {
        console.log('Google Sign-In was canceled or failed');
      }
    } catch (err) {
      console.error('Error with Google Sign-In:', err.message);
      setError('Google Sign-In failed.');
    }
  };

  const handleRegister = async () => {
    setError('');
    if (!acceptedTerms) {
      setError('You must accept the terms and conditions to continue.');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Actualiza el estado del usuario
      alert('User registered successfully!');
      navigation.navigate('HomeScreenNoDevice'); // Redirigir a la pantalla principal
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Center flex={1} bg="white" w="100%">
      <Box safeArea p="5" py="8" w="90%" maxW="300">
        <HStack justifyContent="space-between" alignItems="center" mb="4">
          <Pressable onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-left" size="lg" color="blue.500" />
          </Pressable>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" flex={1}>
            Sign Up
          </Text>
        </HStack>

        {error ? <Text color="red.500" fontSize="sm">{error}</Text> : null}

        <VStack space={4} mt="5">
          <Input placeholder="Username" value={username} onChangeText={setUsername} variant="outline" />
          <Input placeholder="Password (Min. 8 characters)" value={password} onChangeText={setPassword} type="password" variant="outline" />
          <Input placeholder="Repeat Password" value={repeatPassword} onChangeText={setRepeatPassword} type="password" variant="outline" />
          <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" variant="outline" />

          <Checkbox
            isChecked={acceptedTerms}
            onChange={setAcceptedTerms}
            colorScheme="blue"
            value="terms"
            accessibilityLabel="Accept terms and conditions"
          >
            <Text fontSize="xs" color="blue.500">
              I have read the{' '}
              <Text color="blue.500" underline onPress={() => alert('Terms & Conditions')}>
                terms and conditions
              </Text>
            </Text>
          </Checkbox>

          <Button onPress={handleRegister} colorScheme="blue" mt="2" isDisabled={!acceptedTerms}>
            SIGN UP
          </Button>

          <Divider my="4">
            <Text color="muted.500" fontSize="xs">OR</Text>
          </Divider>

          <Button
            onPress={() => handleGoogleSignUp()}
            leftIcon={<Icon as={FontAwesome} name="google" size="sm" color="white" />}
            colorScheme="red"
            isDisabled={!request}
          >
            Sign Up with Google
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default RegisterScreen;
