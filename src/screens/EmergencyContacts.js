import React, { useState } from 'react';
import * as nativebase from 'native-base';

import customTheme from '../theme/colors';
import Communications from 'react-native-communications';
import ContactForm from '../modules/ContactForm';
import { Ionicons } from '@expo/vector-icons';


const colors = customTheme.colors;
const EmergencyContacts = ({ navigation }) => {
    
    const backgroundColor= nativebase.useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const textColor= nativebase.useColorModeValue(colors.LightBackground.hex,colors.DarkBackground.hex);
    const {colorMode}=nativebase.useColorMode();

    const createContact = (text, color, number, initials) => ({

        imageUrl: require('../../assets/avatarImages/Avatar1.png'),
        text,
        Initials: initials,
        fontSize: 'md',

        color:color,

        number,
        onPress: () => CallAlert(number, text)
    });

    const [isOpen, setIsOpen] = React.useState(false);
    const cancelRef = React.useRef();
    const [selectedContact, setSelectedContact] = React.useState(null);
    const [showForm, setShowForm] = React.useState(false)

    const [contacts, setContacts] = useState([
        
    ]);

    const addContact = (text, number, initials) => {
        setContacts([...contacts, createContact(text, number, initials)]);
    };
    const handleCall = async (number) => {
        Communications.phonecall(number, true);
    };

    const CallAlert = (number, name) => {
        setSelectedContact({ number, name });
        setIsOpen(true);
    };
    return (
        <nativebase.Box w={"100%"} flex={1} m={0} bg={backgroundColor}>

            {/*este stack es el boton de back y el titulo de la pantalla(opcional)*/}
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
                    <nativebase.ArrowBackIcon color="black" size="md" />
                </nativebase.Pressable>
                <nativebase.Box
                    safeArea
                >
                    <nativebase.Text fontWeight={"bold"} fontSize={"xl"}>Emergency Contacts</nativebase.Text>
                </nativebase.Box>
            </nativebase.HStack>
            <nativebase.VStack>
                <ContactSection>
                    {contacts.map((contact, index) => (
                        <ContactItem
                            key={index}
                            {...contact}
                        />
                    ))}
                </ContactSection>

                <nativebase.Pressable alignSelf={"center"} bg={colorMode==='light'?'GunmetalLight.hex':'Charcoal.hex'}

                    p={2}
                    rounded={10}
                    onPress={() => setShowForm(true)}
                >
                    <nativebase.Text

                        color={colorMode==='light'?'White.hex':'White.hex'}

                    >Añadir contacto</nativebase.Text>
                </nativebase.Pressable>
            </nativebase.VStack>

            <ContactForm
                isOpen={showForm}
                onClose={() => setShowForm(false)}
                onSave={addContact}
            />
            {/* alertdialog*/}
            <nativebase.AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <nativebase.AlertDialog.Content>
                    <nativebase.AlertDialog.CloseButton />
                    <nativebase.AlertDialog.Header>
                        Calling {selectedContact?.name}
                    </nativebase.AlertDialog.Header>
                    <nativebase.AlertDialog.Body>
                        Are you sure you want to call {selectedContact?.name}?
                    </nativebase.AlertDialog.Body>
                    <nativebase.AlertDialog.Footer>
                        <nativebase.Button.Group space={2}>
                            <nativebase.Button
                                variant="unstyled"
                                colorScheme="coolGray"
                                onPress={() => setIsOpen(false)}
                                ref={cancelRef}
                            >
                                Cancel
                            </nativebase.Button>
                            <nativebase.Button
                                colorScheme="danger"
                                onPress={() => {
                                    handleCall(selectedContact?.number);
                                    setIsOpen(false);
                                }}
                            >
                                Call
                            </nativebase.Button>
                        </nativebase.Button.Group>
                    </nativebase.AlertDialog.Footer>
                </nativebase.AlertDialog.Content>
            </nativebase.AlertDialog>
        </nativebase.Box>
    );
}


const ContactSection = ({ children, spacing = 4 }) => (
    <nativebase.VStack
        space={spacing}
        safeAreaTop="5"
        safeAreaBottom="5"
        color={customTheme.colors.White.hex}
    >
        {children}
    </nativebase.VStack>
);

const ContactItem = ({ imageUrl, text, Initials, fontSize = "md", color, onPress }) => {
    const {colorMode}=nativebase.useColorMode();
    const colorText=colorMode==='light'? 'Charcoal.hex':'White.hex';
    return (
        
        <nativebase.HStack
            space={4}
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
        >
            <nativebase.Avatar
                size={"md"}
                source={imageUrl}
                bg={colorMode=== 'light'? 'White.hex':'Charcoal.hex'}
                color={colorMode=== 'light'? 'White.hex':'Charcoal.hex'}
                borderWidth={1}
            >
                {Initials}
            </nativebase.Avatar>
            <nativebase.Text
                color={colorText}
                fontSize={fontSize}
                flex={1}
            >
                {text}
            </nativebase.Text>
            <nativebase.Pressable
                onPress={onPress}
            >
                <Ionicons 
                    name="call"
                    size={24} // or use "md" if you prefer NativeBase sizing
                    color={colorMode === 'light' ? 'muted.400 ': '#fafafa'}
                />
            </nativebase.Pressable>
        </nativebase.HStack>
    )
}


export default EmergencyContacts;