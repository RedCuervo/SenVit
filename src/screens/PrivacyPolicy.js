import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Privacy Policy</Text>
        <Text style={[styles.content, {textAlign: 'justify'}]}>
          <Text style={styles.sectionTitle}>Last updated: October 5, 2023</Text>
          {'\n\n'}
          This Privacy Policy explains how SenVit ("we", "our", "the application") collects, uses, and protects your 
          information when you use our application. By using SenVit, you agree to the collection and use of information 
          in accordance with this policy.
          {'\n\n'}
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          {'\n'}
          - We may collect personal information that you provide to us when you register for an account, such as your name, 
          email address, and any other information you choose to provide.
          {'\n'}
          - We also collect health-related data, including heart rate information, which is necessary for the functionality 
          of the application.
          {'\n\n'}
          <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
          {'\n'}
          - We use the information we collect to provide and maintain our application, improve user experience, and 
          communicate with you.
          {'\n'}
          - We may use your information to send you updates, promotional materials, and other information that may be of 
          interest to you.
          {'\n\n'}
          <Text style={styles.sectionTitle}>3. Data Security</Text>
          {'\n'}
          - We take the security of your personal information seriously and implement reasonable measures to protect it 
          from unauthorized access, use, or disclosure.
          {'\n'}
          - However, no method of transmission over the internet or method of electronic storage is 100% secure, and we 
          cannot guarantee its absolute security.
          {'\n\n'}
          <Text style={styles.sectionTitle}>4. Sharing Your Information</Text>
          {'\n'}
          - We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, 
          except as required by law or to protect our rights.
          {'\n'}
          - We may share your information with trusted third-party service providers who assist us in operating our application, 
          conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
          {'\n\n'}
          <Text style={styles.sectionTitle}>5. Your Rights</Text>
          {'\n'}
          - You have the right to access, correct, or delete your personal information at any time. If you wish to exercise 
          these rights, please contact us using the information provided below.
          {'\n'}
          - You may also opt-out of receiving promotional communications from us by following the unsubscribe instructions 
          included in those communications.
          {'\n\n'}
          <Text style={styles.sectionTitle}>6. Changes to This Privacy Policy</Text>
          {'\n'}
          - We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
          Privacy Policy on this page.
          {'\n'}
          - You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
          are effective when they are posted on this page.
          {'\n\n'}
          <Text style={styles.sectionTitle}>7. Contact Us</Text>
          {'\n'}
          If you have any questions about this Privacy Policy, please contact us at test@example.com.
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

export default PrivacyPolicy;