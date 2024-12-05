import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Terms and conditions</Text>
        <Text style={[styles.content, {textAlign: 'justify'}]}>
        <Text style={styles.sectionTitle}>Last updated: October 5, 2023</Text>
        {'\n\n'}
        Welcome to SenVit ("we", "our", "the application"). By downloading, installing, or using our application, 
        you agree to comply with these Terms and Conditions of Use. If you do not agree with these terms, 
        you should not use the application.
        {'\n\n'}
        <Text style={styles.sectionTitle}>1. Description of the Service</Text>
        {'\n'}
        SenVit is an application designed to link to a smartwatch that monitors the heart rate of elderly individuals. 
        The application allows users to record and visualize data on cardiac behavior, as well as access emergency features.
        {'\n\n'}
        <Text style={styles.sectionTitle}>2. Use of the Application</Text>
        {'\n'}
        - The application is intended to be used by caregivers and family members of elderly individuals.
        {'\n'}
        - The application should not be used as a substitute for professional medical care. Always consult a doctor 
        or healthcare professional for any health-related questions.
        {'\n\n'}
        <Text style={styles.sectionTitle}>3. User Registration</Text>
        {'\n'}
        - To use the application, you may need to create an account. You are responsible for maintaining the confidentiality 
        of your login information and for all activities that occur under your account.
        {'\n'}
        - You must provide accurate and up-to-date information when registering.
        {'\n\n'}
        <Text style={styles.sectionTitle}>4. Personal Data</Text>
        {'\n'}
        - The application collects data on heart rate and other health-related information. By using the application, 
        you agree that we may collect, store, and use your data in accordance with our Privacy Policy.
        {'\n'}
        - We are committed to protecting your personal information and will not share it with third parties without your 
        consent, except as outlined in our Privacy Policy.
        {'\n\n'}
        <Text style={styles.sectionTitle}>5. Emergency Access</Text>
        {'\n'}
        - The application provides quick access to emergency contact numbers. However, we do not guarantee that these 
        features will always be available or function smoothly.
        {'\n'}
        - It is your responsibility to ensure that the emergency contact information is up to date.
        {'\n\n'}
        <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
        {'\n'}
        - SenVit shall not be liable for any direct, indirect, incidental, special, or consequential damages arising 
        from the use or inability to use the application.
        {'\n'}
        - We do not guarantee the accuracy, reliability, or availability of the information provided by the application.
        {'\n\n'}
        <Text style={styles.sectionTitle}>7. Modifications to the Terms</Text>
        {'\n'}
        - We reserve the right to modify these Terms and Conditions at any time. We will notify you of significant 
        changes through the application or other means.
        {'\n'}
        - Your continued use of the application after the posting of changes constitutes your acceptance of the new terms.
        {'\n\n'}
        <Text style={styles.sectionTitle}>8. Governing Law</Text>
        {'\n'}
        - These Terms and Conditions shall be governed by and construed in accordance with the laws of Aguascalientes, Ags, 
        without regard to its conflict of law provisions.
        {'\n\n'}
        <Text style={styles.sectionTitle}>9. Contact</Text>
        {'\n'}
        If you have any questions about these Terms and Conditions, please contact us at test@example.com.
        </Text>       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248,248,249,255)', 
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TermsAndConditions;