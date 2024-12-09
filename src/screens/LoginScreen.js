import React, { useState } from 'react';
import { VStack, Box, Input, Button, Text, Divider, Center, Pressable, Icon, HStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../firebase'; // configuravion firebase 
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in with:', userCredential.user.email);
      navigation.reset({
        index:0,
        routes:[{name:'HomeScreen1'}]
    });
    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    }
  };

  

  return (
    <Center flex={1} bg="white" w="100%">
      <Box safeArea p="5" py="8" w="90%" maxW="300">
        {/* Encabezado con opción de volver */}
        <HStack justifyContent="space-between" alignItems="center" mb="4">
          <Pressable onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-left" size="lg" color="blue.500" />
          </Pressable>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" flex={1}>
            Login to your app
          </Text>
        </HStack>

        {/* Mostrar error si ocurre */}
        {error ? (
          <Text color="red.500" fontSize="xs" mb="4" textAlign="center">
            {error}
          </Text>
        ) : null}

        <VStack space={4} mt="5">
          <Input
            placeholder="Username or Email"
            value={email}
            onChangeText={setEmail}
            variant="outline"
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            type="password"
            variant="outline"
          />

          <Button onPress={handleLogin} colorScheme="blue" mt="2">
            LOG IN
          </Button>

          <Divider my="4">
            <Text color="muted.500" fontSize="xs">
              OR
            </Text>
          </Divider>

          <Pressable onPress={() => console.log('Login with Facebook')}>
            <Button
              leftIcon={<Icon as={FontAwesome} name="facebook" size="sm" color="white" />}
              bg="#3b5998"
              w="100%"
              _pressed={{ bg: "#2d4373" }}
            >
              LOGIN WITH FACEBOOK
            </Button>
          </Pressable>

          <Pressable onPress={() => console.log('Login with Twitter')}>
            <Button
              leftIcon={<Icon as={FontAwesome} name="twitter" size="sm" color="white" />}
              bg="#1DA1F2"
              w="100%"
              mt="2"
              _pressed={{ bg: "#0d95e8" }}
            >
              LOGIN WITH TWITTER
            </Button>
          </Pressable>

          <Pressable onPress={() => console.log('Login with Google')}>
            <Button
              leftIcon={<Icon as={FontAwesome} name="google" size="sm" color="white" />}
              bg="#DB4437"
              w="100%"
              mt="2"
              _pressed={{ bg: "#c23321" }}
            >
              LOGIN WITH GOOGLE
            </Button>
          </Pressable>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;