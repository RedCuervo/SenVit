import React from 'react';
import * as nativebase from 'native-base';

const PrivacyPolicy = ({navigation}) => {
  const { colorMode } = nativebase.useColorMode();
  const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  return (
    <nativebase.Box w={"100%"} flex={1} m={0} bg={backgroundColor}>
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
                    <nativebase.Text fontWeight="bold" fontSize="xl">PrivacyPolicy</nativebase.Text>
                </nativebase.Box>
            </nativebase.HStack>
      <nativebase.ScrollView
      m={6}
      indicatorStyle='black'
      p={3}
      borderWidth={1}
      borderRadius={10}
      backgroundColor={colorMode === 'light' ? 'muted.200' : 'GunmetalLight.hex'}
      >
        <nativebase.Text fontSize="md" textAlign="justify">
          <nativebase.Text fontWeight="bold">Last updated: October 5, 2023{'\n\n'}</nativebase.Text>
          This Privacy Policy explains how SenVit ("we", "our", "the application") collects, uses, and protects your 
          information when you use our application. By using SenVit, you agree to the collection and use of information 
          in accordance with this policy.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">1. Information We Collect{'\n'}</nativebase.Text>
          - We may collect personal information that you provide to us when you register for an account, such as your name, 
          email address, and any other information you choose to provide.
          {'\n'}
          - We also collect health-related data, including heart rate information, which is necessary for the functionality 
          of the application.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">2. How We Use Your Information{'\n'}</nativebase.Text>
          - We use the information we collect to provide and maintain our application, improve user experience, and 
          communicate with you.
          {'\n'}
          - We may use your information to send you updates, promotional materials, and other information that may be of 
          interest to you.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">3. Data Security{'\n'}</nativebase.Text>
          - We take the security of your personal information seriously and implement reasonable measures to protect it 
          from unauthorized access, use, or disclosure.
          {'\n'}
          - However, no method of transmission over the internet or method of electronic storage is 100% secure, and we 
          cannot guarantee its absolute security.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">4. Sharing Your Information{'\n'}</nativebase.Text>
          - We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, 
          except as required by law or to protect our rights.
          {'\n'}
          - We may share your information with trusted third-party service providers who assist us in operating our application, 
          conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">5. Your Rights{'\n'}</nativebase.Text>
          - You have the right to access, correct, or delete your personal information at any time. If you wish to exercise 
          these rights, please contact us using the information provided below.
          {'\n'}
          - You may also opt-out of receiving promotional communications from us by following the unsubscribe instructions 
          included in those communications.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">6. Changes to This Privacy Policy{'\n'}</nativebase.Text>
          - We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
          Privacy Policy on this page.
          {'\n'}
          - You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
          are effective when they are posted on this page.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">7. Contact Us{'\n'}</nativebase.Text>
          If you have any questions about this Privacy Policy, please contact us at test@example.com.
        </nativebase.Text>
      </nativebase.ScrollView>
    </nativebase.Box>
  );
};

export default PrivacyPolicy;
