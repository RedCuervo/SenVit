import React from 'react';
import * as nativebase from 'native-base';

const MenuItem = ({ text, fontSize = 'md', color, fontWeight, onPress }) => (
    <nativebase.Pressable 
        onPress={onPress}
        w="full"
        py={2}
    >
        <nativebase.Text
            fontSize={fontSize}
            paddingLeft={10}
            color={color}
            fontWeight={fontWeight}
        >
            {text}
        </nativebase.Text>
    </nativebase.Pressable>
);

const MenuSection = ({ children, spacing = 4 }) => (
    <nativebase.VStack 
        space={spacing}
        safeAreaTop="5"
        safeAreaBottom="5"
    >
        {children}
    </nativebase.VStack>
);

const MoreScreen = ({ navigation }) => {
    const menuItems = [
        { 
            text: 'Emergency Contacts', 
            screen: 'EmergencyContacts' 
        },
        { 
            text: 'Settings', 
            screen: 'Settings'
        },
        { 
            text: 'History', 
            screen: 'History'
        },
        { 
            text: 'Notifications', 
            screen: 'Notifications'
        },
        { 
            text: 'About SenVit', 
            screen: 'About'
        },
        { 
            text: 'Help', 
            screen: 'Help'
        }
    ];

    return (
        <nativebase.Box w={"100%"} flex={1} m={0} bg={"white"}>
            <nativebase.HStack
                alignItems="center"
                justifyContent="center"
                h={100}
                w="full"
                position={"relative"}
                p={1}
            >
                <nativebase.Pressable 
                    onPress={() => navigation.goBack()}
                    position={"absolute"}
                    top={"60px"}
                    left={5}
                    zIndex={1}
                    w={10}
                    h={10}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <nativebase.ArrowBackIcon color="black" size="md" />
                </nativebase.Pressable>
            </nativebase.HStack>
            <nativebase.VStack>
                <nativebase.Box 
                    safeAreaTop="5"
                    safeAreaBottom="5"
                    maxH={100}
                >
                    {/* Navigate to Profile Screen */}
                    <MenuItem 
                        text="Profile" 
                        fontSize="xl" 
                        onPress={() => navigation.navigate('ProfileScreen')} 
                    />
                    <MenuItem 
                        text="Edit profile" 
                        color="muted.500" 
                        onPress={() => navigation.navigate('EditProfile')}
                    />
                </nativebase.Box>

                <nativebase.Divider my="2" orientation='horizontal' />

                {/* Device Section */}
                <MenuSection>
                    <MenuItem 
                        text="My Device" 
                        fontSize="lg" 
                        fontWeight="bold"
                        onPress={() => navigation.navigate('Device')}
                    />
                    {menuItems.map((item, index) => (
                        <MenuItem 
                            key={index} 
                            text={item.text}
                            fontSize='sm'
                            color={"muted.500"}
                            onPress={() => navigation.navigate(item.screen)}
                        />
                    ))}
                </MenuSection>

                <nativebase.Divider my="2" orientation='horizontal' />
                <MenuSection>
                    <MenuItem
                        text="Terms&Conditions"
                        fontSize="sm"
                        color={"muted.500"}
                        onPress={() => navigation.navigate('Terms&Conditions')}
                    />
                    <MenuItem
                        text="Privacy Policy"
                        fontSize="sm"
                        color={"muted.500"}
                        onPress={() => navigation.navigate('PrivacyPolicy')}
                    />
                </MenuSection>
            </nativebase.VStack>
        </nativebase.Box>
    );
}

export default MoreScreen;