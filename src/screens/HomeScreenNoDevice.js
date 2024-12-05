import React from 'react';
import * as nativebase from 'native-base';
import CustomColors from '../theme/colors';

const HomeScreenNoDevice = ({route,navigation})=>{
    const {username}=route.params;
    return(
        <nativebase.Box w={"100%"} flex={1} m={0} bg={"white"}>
            <nativebase.HStack
            alignItems="center"
            safeArea
            safeAreaX="2"
            h={100}
            w="full"
            position={"relative"}
            p={1}
            borderWidth={1}
            justifyContent={"space-around"}
            >
                <nativebase.Pressable onPress={()=>navigation.goBack()}
                    position={"relative"}
                    >
                    <nativebase.Avatar bg={CustomColors.GunmetalLight.hex} mr={1} source={require('../../assets/avatarImages/Avatar1.png')} color={"white"}>JD</nativebase.Avatar>
                </nativebase.Pressable>
                <nativebase.Box
                borderRadius={25}
                borderColor={'muted.400'}
                borderWidth={1}
                maxW={"50%"}
                flex={1}
                alignItems={"center"}
                p={2}
                bg={"muted.100"}
                >
                    <nativebase.Text fontWeight={"bold"}>Welcome {username}</nativebase.Text>
                </nativebase.Box>
                <nativebase.Pressable onPress={()=>navigation.navigate('MoreScreen')}
                    position={"relative"}
                    w={10}
                    h={10}
                    justifyContent={"center"}
                    alignItems={"center"}
                    >
                    <nativebase.ThreeDotsIcon color="black" size="md"/>
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
                    />
                    <nativebase.Text fontSize={"sm"}>It seems you don't have a device connected</nativebase.Text>
                    </nativebase.Box>
                    <nativebase.Box
                    alignItems={"center"}>
                        <nativebase.Pressable
                        onPress={()=>navigation.navigate('ConnectionScreen')}
                        p={5}
                        background={CustomColors.Charcoal.hex}
                        borderRadius={65}
                        m={5}
                        >
                            <nativebase.Image
                            source={require('../../assets/images/plug-connection.png')}
                            alt='connect'
                            size={"md"}
                            tintColor={CustomColors.Seasalt.hex}
                            />
                        </nativebase.Pressable>
                        <nativebase.Text>Connect Now!!</nativebase.Text>
                    </nativebase.Box>
            </nativebase.Center>
        </nativebase.Box>
    )
}
export default HomeScreenNoDevice;