import React, { useState, useEffect } from 'react';
import * as nativebase from 'native-base';
import CustomColors from '../theme/colors';
import ToggleNightMode from '../theme/ToggleNightMode';
import { useColorModeValue } from 'native-base';
import HeaderTitle from '../modules/HeaderTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = CustomColors.colors;

const Settings = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    useEffect(() => {
        const loadNotificationSettings = async () => {
            try {
                const value = await AsyncStorage.getItem('notificationsEnabled');
                if (value !== null) {
                    setNotificationsEnabled(value === 'true');
                }
            } catch (error) {
                console.error('Error loading notification settings:', error);
            }
        };
        loadNotificationSettings();
    }, []);

    const toggleNotifications = async (value) => {
        setNotificationsEnabled(value);
        try {
            await AsyncStorage.setItem('notificationsEnabled', value.toString());
        } catch (error) {
            console.error('Error saving notification settings:', error);
        }
    };

    const backgroundColor = useColorModeValue(colors.LightBackground.hex, colors.DarkBackground.hex);
    return (
        <nativebase.Box
            flex={1}
            bg={backgroundColor}
        >
            <HeaderTitle
            title="Settings"
            navigation={navigation}
            />
            <nativebase.VStack
                safeArea
                space={5}
            >
                <nativebase.HStack
                    maxH={100}
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <nativebase.Text>Enable Notifications</nativebase.Text>
                    <nativebase.Switch
                        onToggle={toggleNotifications}
                        isChecked={notificationsEnabled}
                        colorScheme="emerald"
                    />
                </nativebase.HStack>
                <nativebase.HStack
                    maxH={100}
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <nativebase.Text>Night mode</nativebase.Text>
                    <ToggleNightMode />
                </nativebase.HStack>
                <nativebase.Pressable
                    onPress={() => navigation.navigate('Notifications')}
                    margin={10}
                    py={2}
                    background={"blue.400"}
                    borderRadius={20}
                >
                    <nativebase.HStack
                        alignItems="center"
                        
                        justifyContent="space-around"
                    >
                        <nativebase.Text>View Notifications</nativebase.Text>
                        <nativebase.ArrowForwardIcon color="black" size="md" />
                    </nativebase.HStack>
                </nativebase.Pressable>
            </nativebase.VStack>
        </nativebase.Box>
    );
};

export default Settings;