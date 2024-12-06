import React from 'react';
import * as nativebase from 'native-base';

import customTheme from '../theme/colors';
import { useProfile } from '../context/ProfileContext';
import HeaderMain from '../modules/HeaderMain';

const colors = customTheme.colors;
const HomeScreenNoDevice = ({navigation})=>{
    
    const backgroundColor= nativebase.useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const textColor= nativebase.useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const {colorMode}=nativebase.useColorMode();
    const {profileData}=useProfile();
    return(
        <nativebase.Box w={"100%"} flex={1} m={0} bg={backgroundColor}>

            <HeaderMain navigation={navigation}/>
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