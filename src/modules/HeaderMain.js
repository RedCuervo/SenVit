import React from 'react';
import * as nativebase from 'native-base';
import { useProfile } from '../context/ProfileContext';


function HeaderMain({navigation}){
        
    const {colorMode}=nativebase.useColorMode();
    const textColor= colorMode==='light'? 'LightBackground.hex':'DarkBackground.hex';
    const {profileData}=useProfile();
    return(
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
                <nativebase.Pressable onPress={()=>navigation.navigate('Profile')}
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

    );
}
export default HeaderMain;