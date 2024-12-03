import React from "react";
import { Box, Center, Text, Pressable } from "native-base";

function Connected ({ navigation }){
    return(
        <Center w="100%" flex={1} m={0} bg="white"flexDir={"column"}>
        <Box
        bg={"muted.50"}
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
        onPress={()=>navigation.navigate('HomeScreen1')}
        m={10}
        ><Text textAlign={"center"} textDecorationLine={"underline"}>Go Home</Text></Pressable>
        </Box>
    </Center>

    );
}

export default Connected;