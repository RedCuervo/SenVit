import React from 'react';
import * as nativebase from 'native-base';
import HeaderTitle from '../modules/HeaderTitle';
import customTheme from '../theme/colors';




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


const MoreScreen = ({navigation})=>{
    const {colorMode}=nativebase.useColorMode();

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


    const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';

    return(
        <nativebase.Box flex={1} bg={backgroundColor} m={0}>
           <HeaderTitle
            title=" "
            navigation={navigation}
            />
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
                        onPress={() => navigation.navigate('Profile')} 
                    />
                    <MenuItem 
                        text="Edit profile" 
                        color={colorMode ==='light'? 'muted.400':'light.300'} 

                        onPress={() => navigation.navigate('EditProfile')}
                    />
                </nativebase.Box>


                <nativebase.Divider my="2" orientation='horizontal'/>


                {/* Device Section */}
                <MenuSection>
                    <MenuItem 
                        text="My Device" 
                        fontSize="lg" 
                        fontWeight="bold"
                        color={colorMode==='light'? 'Charcoal.hex':'White.hex'}
                    />
                    {menuItems.map((item, index) => (
                        <MenuItem 
                            key={index} 
                            text={item.text}
                            fontSize='sm'

                            color={colorMode==='light'? 'muted.500':'Seasalt.hex'}

                            onPress={() => navigation.navigate(item.screen)}
                        />
                    ))}
                </MenuSection>
                <nativebase.Divider my="2" orientation='horizontal'/>
                <MenuSection>
                    <MenuItem
                    text="Terms&Conditions"
                    fontSize="sm"
                    color={colorMode==='light'? 'muted.500':'Seasalt.hex'}
                    onPress={()=>navigation.navigate('TermsAndConditions')}
                    />

                    <MenuItem
                    text="Privacy Policy"
                    fontSize="sm"
                    color={colorMode==='light'? 'muted.500':'Seasalt.hex'}
                    onPress={()=>navigation.navigate('PrivacyPolicy')}

                    />
                </MenuSection>
            </nativebase.VStack>
        </nativebase.Box>

    );
}
export default MoreScreen;
