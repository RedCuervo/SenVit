import React from 'react';
import * as nativebase from 'native-base';


function HeaderTitle({navigation,title}){
    const {colorMode}=nativebase.useColorMode();
    const iconColor= colorMode==='light'? 'black':'white';
    return(
        <nativebase.HStack
        alignItems="center"
        justifyContent="center"
        h={100}
        w="full"
        position={"relative"}
        safeArea
    >
        <nativebase.Pressable
            onPress={() => navigation.goBack()}
            position={"absolute"}
            top={"60px"}
            left={5}
            w={10}
            h={10}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <nativebase.ArrowBackIcon color={iconColor} size="md" />
        </nativebase.Pressable>
        <nativebase.Box
            safeArea
        >
            <nativebase.Text fontWeight={"bold"} fontSize={"xl"}>{title}</nativebase.Text>
        </nativebase.Box>
    </nativebase.HStack>
    )
}
export default HeaderTitle;