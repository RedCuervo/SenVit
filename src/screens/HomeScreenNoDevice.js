import React from 'react';
import * as nativebase from 'native-base';
import customTheme from '../theme/colors';
import { useProfile } from '../context/ProfileContext';


const colors = customTheme.colors;
const HomeScreenNoDevice = ({navigation})=>{
    
    const backgroundColor= nativebase.useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const textColor= nativebase.useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const {colorMode}=nativebase.useColorMode();
    const {profileData}=useProfile();
    return(
        <nativebase.Box w={"100%"} flex={1} m={0} bg={backgroundColor}>
            <nativebase.HStack
            alignItems="center"
            safeArea
            safeAreaX="2"
            h={100}
            w="full"
            position={"relative"}
            p={1}
            
            justifyContent={"space-around"}
            >
                <nativebase.Pressable onPress={()=>navigation.goBack()}
                    position={"relative"}
                    >
                    <nativebase.Avatar bg={colorMode=== 'light'? 'GunmetalLight.hex':'LightBackground.hex'} mr={1} source={require('../../assets/avatarImages/Avatar1.png')} color={"white"}>JD</nativebase.Avatar>
                </nativebase.Pressable>
                <nativebase.Box
                borderRadius={25}
                borderColor={colorMode=== 'light'? 'muted.400': 'Seasalt.hex'}
                borderWidth={1}
                maxW={"50%"}
                flex={1}
                alignItems={"center"}
                p={2}
                bg={colorMode==='light'? 'Charcoal.hex':'Seasalt.hex'}
                >
                    <nativebase.Text fontWeight={"bold"}
                    color={textColor}
                    >Welcome {profileData.name.split(" ")[0]}</nativebase.Text>

                </nativebase.Box>
                <nativebase.Pressable onPress={()=>navigation.navigate('MoreScreen')}
                    position={"relative"}
                    w={10}
                    h={10}
                    justifyContent={"center"}
                    alignItems={"center"}
                    >
                    <nativebase.ThreeDotsIcon color={colorMode==='light'? 'black':'White.hex'} size="md"/>
                </nativebase.Pressable>
            </nativebase.HStack>
            <nativebase.Center 
            safeAreaY="10"
            flex={1}
            alignItems={"center"}
            justifyContent={"space-around"}
                >
                    <nativebase.Box
                    alignItems={"center"}
                    >
                    <nativebase.Image 
                    source={require('../../assets/images/broken-chain-link-wrong.png')}
                    alt="broken chain link"
                    size={"md"}
                    m={10}
                    tintColor={colorMode==='light'? 'Charcoal.hex':'Seasalt.hex'}
                    />
                    <nativebase.Text fontSize={"sm"}>It seems you don't have a device connected</nativebase.Text>
                    </nativebase.Box>
                    <nativebase.Box
                    alignItems={"center"}>
                        <nativebase.Pressable
                        onPress={()=>navigation.navigate('ConnectionScreen')}
                        p={5}
                        background={colorMode==='light'? 'Charcoal.hex':'Seasalt.hex'}
                        borderRadius={65}
                        m={5}
                        >
                            <nativebase.Image
                            source={require('../../assets/images/plug-connection.png')}
                            alt='connect'
                            size={"md"}
                            tintColor={colorMode=== 'light'? 'White.hex':'black'}
                            />
                        </nativebase.Pressable>
                        <nativebase.Text>Connect Now!!</nativebase.Text>
                    </nativebase.Box>
            </nativebase.Center>
        </nativebase.Box>
    )
}
export default HomeScreenNoDevice;