import React from "react";
import { Box, Center, Text, Pressable, useColorMode, useColorModeValue} from "native-base";
import customTheme from "../theme/colors";
const colors = customTheme.colors;




function Connected ({ navigation }){
    const handleGoHome=()=>{
        navigation.reset({
            index:0,
            routes:[{name:'MainScreen'}]
        });
    }
    const backgroundColor= useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const textColor= useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const {colorMode}=useColorMode();
    return(
        <Center w="100%" flex={1} m={0} bg={colorMode=='light'? 'LightBackground.hex':'DarkBackground.hex'}flexDir={"column"}>
        <Box
        bg={colorMode=='light'? 'White.hex':'Charcoal.hex'}
        px={4}
        py={10}
        safeArea w={"80%"}
        maxW={400}
        borderWidth={1}
        borderColor={"muted.600"}
        borderRadius={10}
        Boxshadow={3}
        position={"absolute"}
        top={2}
        flex={1}
        maxH={"85%"}
        h={"85%"}
        justifyContent={"center"}
        space={3}
        >
        <Text alignSelf={"center"} textAlign={"center"} w={160} fontSize={"xl"}
        fontWeight={"bold"}
        >
            Succesfully synchronization
        </Text>
        <Pressable
        onPress={()=>handleGoHome()}
        m={10}
        ><Text textAlign={"center"} textDecorationLine={"underline"}>Go Home</Text></Pressable>
        </Box>
    </Center>

    );
}

export default Connected;