import React, { useState } from 'react';
import * as nativebase from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


const handlePress=async (url)=>{
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
}


const HelpScreen = ({navigation}) => {
    const { colorMode } = nativebase.useColorMode();
    const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
    const iconColor = colorMode === 'light' ? 'black' : 'white';
    return (
        <nativebase.Box flex={1} bg={backgroundColor} m={0}>
            <nativebase.HStack
                alignItems="center"
                justifyContent="center"
                h={100}
                w="full"
                position="relative"
                safeArea
                bg={backgroundColor}
            >
                <nativebase.Pressable
                    onPress={() => navigation.goBack()}
                    position="absolute"
                    top="60px"
                    left={5}
                    w={10}
                    h={10}
                    justifyContent="center"
                    alignItems="center"
                >
                    <nativebase.ArrowBackIcon color="black" size="md" />
                </nativebase.Pressable>
                <nativebase.Box safeArea>
                    <nativebase.Text fontWeight="bold" fontSize="xl">Help Center</nativebase.Text>
                </nativebase.Box>
            </nativebase.HStack>

            <nativebase.Divider
                    w={"70%"}
                    alignSelf={"center"}
                    my={2}
                />
                <nativebase.Heading
                    textAlign={"center"}
                    fontSize={"xl"}>Having issues?</nativebase.Heading>

            <nativebase.VStack
            safeArea            
            >   
                <nativebase.Box
                    safeAreaX="10"
                    safeAreaY="5"
                    
                >
                    <nativebase.Text>Contact Us!</nativebase.Text>
                    <nativebase.Pressable
                        w="full" 
                        my={1}
                        onPress={() => handlePress('mailto:sael_agua@hotmail.com')}
                    >
                        
                        <nativebase.HStack
                            alignItems="center"
                            space={2}
                            p={2} // adds padding inside
                            w="full"
                            rounded={"md"}
                        >
                            <Ionicons
                                name="mail"
                                size={24}
                                color={iconColor}
                            />
                            <nativebase.Text flex={1}>sael_agua@hotmail.com</nativebase.Text>
                        </nativebase.HStack>
                        
                    </nativebase.Pressable>
                    <nativebase.Pressable
                        w="full" 
                        my={1}
                        onPress={() => handlePress(`fb://page/${477707326385595}`)}
                        onError={() => Linking.openURL('https://www.facebook.com/rickroll548')}
                    >
                        <nativebase.HStack
                            alignItems="center"
                            space={2}
                            p={2} // adds padding inside
                            w="full"
                        >
                            <Ionicons
                                name="logo-facebook"
                                size={24}
                                color={iconColor}
                            />
                            <nativebase.Text flex={1}>SenVit Official</nativebase.Text>
                        </nativebase.HStack>
                    </nativebase.Pressable>
                    <nativebase.Pressable
                        w="full" 
                        my={1}
                        onPress={()=>handlePress('whatsapp://send?phone=+524491859107')}
                    >
                        <nativebase.HStack
                            alignItems="center"
                            space={2}
                            p={2} // adds padding inside
                            w="full"
                        >
                            <Ionicons
                                name="logo-whatsapp"
                                size={24}
                                color={iconColor}
                            />
                            <nativebase.Text flex={1}>WhatsApp Chat</nativebase.Text>
                        </nativebase.HStack>
                    </nativebase.Pressable>
                    <nativebase.Pressable
                        w="full" 
                        my={1}
                        onPress={()=>handlePress('tel:+524491859107')}
                    >
                        <nativebase.HStack
                            alignItems="center"
                            space={2}
                            p={2} // adds padding inside
                            w="full"
                        >
                            <Ionicons
                                name="person"
                                size={24}
                                color={iconColor}
                            />
                            <nativebase.Text flex={1}>+52 449 185 9107</nativebase.Text>
                        </nativebase.HStack>
                    </nativebase.Pressable>
                </nativebase.Box>
            </nativebase.VStack>
        </nativebase.Box>

    );
}
export default HelpScreen;