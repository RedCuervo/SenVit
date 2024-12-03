import React from "react";
import { Center, Box, VStack, Text, Pressable } from "native-base";
import CustomColors from "../theme/colors";

function Disconnected({ setIsConnected }) {

    const handleSync = () => {
        setIsConnected(true);
    }

    return (
        <Center w="100%" flex={1} m={0} bg="white">
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
                maxH={"85%"}
                h={"85%"}
            >
                <VStack space={2}>
                    <Text>To Connect your SenVit follow the instructions:</Text>
                    <Text>Step 1. Turn on your SenVit.</Text>
                    <Text>Step 2. Turn your Bluetooth on.</Text>
                    <Text>Step 3. Wait until the led on the side of your SenVit starts to blink.</Text>
                    <Text>Step 4. Press the synchronization button for 5 seconds.</Text>
                    <Text>Step 5. Press the button below.</Text>
                    <Text>Step 6. Wait until the led on your SenVit stops blinking.</Text>
                    <Text>Congratulations you've set up your SenVit!</Text>
                </VStack>
                <Pressable
                    mt={20}
                    h={100}
                    mb={10}
                    bg={CustomColors.Charcoal.hex}
                    borderRadius={50}
                    w={100}
                    alignSelf={"center"}
                    justifyContent={"center"}
                    onPress={() => handleSync()}
                ><Text textAlign={"center"} color={CustomColors.White.hex}>Synchronize Now</Text></Pressable>
            </Box>
        </Center>
    );
}
export default Disconnected;