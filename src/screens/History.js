import React, { useState, useEffect } from 'react';
import * as nativebase from 'native-base';

const HistoryScreen = ({ navigation }) => {
    const { colorMode } = nativebase.useColorMode();
    const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
    const [displayedData, setDisplayedData] = useState([]);
    const cardBackground = colorMode === 'light' ?  'Seasalt.hex': 'GunmetalLight.hex'; 
    const textColor = colorMode === 'light' ? 'muted.500':'light.200';
    const renderHistoryItem = ({ item }) => (
        <nativebase.Box
            
            key={`${item.id}-${item.timestamp}`}
            bg={cardBackground}
            p={4}
            m={2}
            rounded="md"
            shadow={2}
            
        >
            <nativebase.VStack space={2}>
                <nativebase.Text fontSize="md" color={textColor}>{item.timestamp}</nativebase.Text>
                <nativebase.Text color={textColor}>{item.message}</nativebase.Text>
            </nativebase.VStack>
        </nativebase.Box>
    )

    const data = [
        { id: Date.now() + '-1', timestamp: '2023-05-01 10:00 AM', message: 'Heart rate: 72 bpm' },
        { id: Date.now() + '-2', timestamp: '2023-05-02 11:30 AM', message: 'Heart rate: 68 bpm' },
        { id: Date.now() + '-3', timestamp: '2023-05-03 09:45 AM', message: 'Heart rate: 75 bpm' },
        { id: Date.now() + '-4', timestamp: '2023-05-04 10:15 AM', message: 'Heart rate: 70 bpm' },
        { id: Date.now() + '-5', timestamp: '2023-05-05 12:00 PM', message: 'Heart rate: 65 bpm' },
        { id: Date.now() + '-6', timestamp: '2023-05-06 02:30 PM', message: 'Heart rate: 80 bpm' },
        { id: Date.now() + '-7', timestamp: '2023-05-07 03:45 PM', message: 'Heart rate: 78 bpm' },
        { id: Date.now() + '-8', timestamp: '2023-05-08 04:15 PM', message: 'Heart rate: 72 bpm' },
        { id: Date.now() + '-9', timestamp: '2023-05-09 05:00 PM', message: 'Heart rate: 68 bpm' },
        { id: Date.now() + '-10', timestamp: '2023-05-10 06:30 PM', message: 'Heart rate: 75 bpm' },
        { id: Date.now() + '-11', timestamp: '2023-05-11 07:45 PM', message: 'Heart rate: 70 bpm' }
    ];

    useEffect(() => {
        data.forEach((item, index) => {
            setTimeout(() => {
                setDisplayedData(prev => {
                    // Check if item already exists
                    if (prev.find(p => p.id === item.id)) {
                        return prev;
                    }
                    return [...prev, item];
                });
            }, index * 500);
        });
    }, []);


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
                    <nativebase.Text fontWeight="bold" fontSize="xl">History</nativebase.Text>
                </nativebase.Box>
            </nativebase.HStack>
            <nativebase.VStack
            safeAreaX="5"
            >
                    <nativebase.FlatList
                        data={displayedData}
                        renderItem={renderHistoryItem}
                        keyExtractor={item => item.id}
                    />
            </nativebase.VStack>

        </nativebase.Box>
    )
}
export default HistoryScreen;



