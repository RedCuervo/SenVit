import React from 'react';
import * as nativebase from 'native-base';

const ContactForm = ({ isOpen, onClose, onSave }) => {
    const [newContact, setNewContact] = React.useState({
        text: '',
        number: '',
        initials: ''
    });

    const handleSave = () => {
        onSave(newContact.text, newContact.number, newContact.initials);
        setNewContact({ text: '', number: '', initials: '' });
        onClose();
    };

    return (
        <nativebase.Modal isOpen={isOpen} onClose={onClose}>
            <nativebase.Modal.Content>
                <nativebase.Modal.Header>Add New Contact</nativebase.Modal.Header>
                <nativebase.Modal.Body>
                    <nativebase.VStack space={3}>
                        <nativebase.Input
                            placeholder="Name"
                            value={newContact.text}
                            onChangeText={(value) => 
                                setNewContact({...newContact, text: value})}
                        />
                        <nativebase.Input
                            placeholder="Phone Number"
                            value={newContact.number}
                            keyboardType="phone-pad"
                            onChangeText={(value) => 
                                setNewContact({...newContact, number: value})}
                        />
                        <nativebase.Input
                            placeholder="Initials"
                            value={newContact.initials}
                            maxLength={2}
                            onChangeText={(value) => 
                                setNewContact({...newContact, initials: value})}
                        />
                    </nativebase.VStack>
                </nativebase.Modal.Body>
                <nativebase.Modal.Footer>
                    <nativebase.Button.Group space={2}>
                        <nativebase.Button
                            variant="ghost"
                            onPress={onClose}
                        >
                            Cancel
                        </nativebase.Button>
                        <nativebase.Button
                            onPress={handleSave}
                        >
                            Save
                        </nativebase.Button>
                    </nativebase.Button.Group>
                </nativebase.Modal.Footer>
            </nativebase.Modal.Content>
        </nativebase.Modal>
    );
};

export default ContactForm;