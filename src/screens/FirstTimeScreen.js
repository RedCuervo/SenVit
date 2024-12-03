import React from 'react';
import {Button, VStack, Text,Box,Center,Pressable, useTheme,Image} from 'native-base'
import CustomColors from '../theme/colors';


const buttnColor= CustomColors.GunmetalLight.hex;

const FirstScreen = ({navigation})=>
{
    return(
        
        <Center w="100%" flex={1} m={0} borderWidth={1} bg={"white"}>
            <Image 
            source={require('../../assets/images/splash-icon2.png')} alt="Background" size="xl" resizeMode='contain'/>
        <Box safeArea p="10" py="10" w="100%" maxW="290">
        <VStack space={2} alignItems={"center"}  m={0}>
        <Text fontSize={"xl"}>Get Started!</Text>
        <Pressable bg={buttnColor} py={2} px={5}>
            <Text color={CustomColors.Seasalt.hex} fontSize={"lg"}>Sign Up!</Text>
        </Pressable>
        <Text color={"muted.500"} pt={5}>Already have an account?</Text>
        <Pressable py={2} px={2}
        onPress={()=>navigation.navigate('HomeScreen1')}
        >
            <Text color={CustomColors.Charcoal.hex} fontSize={"md"} 
            textDecorationColor={"black"}
            textDecorationLine={"underline"}
            >Log In!</Text>
        </Pressable>
        </VStack>
        </Box>
        </Center>
    )
}
export default FirstScreen;