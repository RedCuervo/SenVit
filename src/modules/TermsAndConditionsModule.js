import React from 'react';
import * as nativebase from 'native-base';


function TermsAndConditionsText(){
    const { colorMode } = nativebase.useColorMode();
return(
    <nativebase.ScrollView 
      m={6}
      indicatorStyle='black'
      p={3}
      borderWidth={1}
      borderRadius={10}
      backgroundColor={colorMode === 'light' ? 'muted.200' : 'GunmetalLight.hex'}
      >
        <nativebase.Text textAlign="justify"
        my={5}
        >
          <nativebase.Text fontWeight="bold">Last updated: October 5, 2023{'\n\n'}</nativebase.Text>
          Welcome to SenVit ("we", "our", "the application"). By downloading, installing, or using our application, 
          you agree to comply with these Terms and Conditions of Use. If you do not agree with these terms, 
          you should not use the application.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">1. Description of the Service{'\n'}</nativebase.Text>
          SenVit is an application designed to link to a smartwatch that monitors the heart rate of elderly individuals. 
          The application allows users to record and visualize data on cardiac behavior, as well as access emergency features.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">2. Use of the Application{'\n'}</nativebase.Text>
          - The application is intended to be used by caregivers and family members of elderly individuals.
          {'\n'}
          - The application should not be used as a substitute for professional medical care. Always consult a doctor 
          or healthcare professional for any health-related questions.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">3. User Registration{'\n'}</nativebase.Text>
          - To use the application, you may need to create an account. You are responsible for maintaining the confidentiality 
          of your login information and for all activities that occur under your account.
          {'\n'}
          - You must provide accurate and up-to-date information when registering.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">4. Personal Data{'\n'}</nativebase.Text>
          - The application collects data on heart rate and other health-related information. By using the application, 
          you agree that we may collect, store, and use your data in accordance with our Privacy Policy.
          {'\n'}
          - We are committed to protecting your personal information and will not share it with third parties without your 
          consent, except as outlined in our Privacy Policy.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">5. Emergency Access{'\n'}</nativebase.Text>
          - The application provides quick access to emergency contact numbers. However, we do not guarantee that these 
          features will always be available or function smoothly.
          {'\n'}
          - It is your responsibility to ensure that the emergency contact information is up to date.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">6. Limitation of Liability{'\n'}</nativebase.Text>
          - SenVit shall not be liable for any direct, indirect, incidental, special, or consequential damages arising 
          from the use or inability to use the application.
          {'\n'}
          - We do not guarantee the accuracy, reliability, or availability of the information provided by the application.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">7. Modifications to the Terms{'\n'}</nativebase.Text>
          - We reserve the right to modify these Terms and Conditions at any time. We will notify you of significant 
          changes through the application or other means.
          {'\n'}
          - Your continued use of the application after the posting of changes constitutes your acceptance of the new terms.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">8. Governing Law{'\n'}</nativebase.Text>
          - These Terms and Conditions shall be governed by and construed in accordance with the laws of Aguascalientes, Ags, 
          without regard to its conflict of law provisions.
          {'\n\n'}
          <nativebase.Text fontWeight="bold">9. Contact{'\n'}</nativebase.Text>
          If you have any questions about these Terms and Conditions, please contact us at test@example.com.
        </nativebase.Text> 
        <nativebase.HStack
        safeAreaBottom="10"
        alignItems="center"
        >
        <nativebase.Text
        w={20}
        >All right</nativebase.Text>
        <nativebase.Checkbox
        onChange={()=>console.log("Hola")}
        aria-label='Accept'
        />
        </nativebase.HStack>      
      </nativebase.ScrollView>
)
}
export default TermsAndConditionsText;