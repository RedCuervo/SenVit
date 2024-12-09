import React from 'react';
import * as nativebase from 'native-base';
import HeaderTitle from '../modules/HeaderTitle';



const About = ({navigation}) => {
  const { colorMode } = nativebase.useColorMode();
    const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  return (
    <nativebase.Box
      flex={1}
      alignItems="center"
      bg={backgroundColor}
    >
  <HeaderTitle
  title="About SenVit"
  navigation={navigation}
  />


<nativebase.Box
safeAreaX="8"
>
      <nativebase.ScrollView>
        <nativebase.VStack space={3} alignItems="center"
        background={colorMode==='light'?'muted.200':'GunmetalLight.hex'}
        p={10}
        mt={10}
        rounded={25}
        >
          <nativebase.Text fontSize="2xl" fontWeight="bold" textAlign="center">
            About us.
          </nativebase.Text>
          <nativebase.Text fontSize="md" textAlign="justify">
            This application is designed to connect to a smartwatch that transmits
            the wearer's heart rate, allowing for a detailed record of the cardiac
            behavior of elderly individuals. The application provides a complete
            history of the user's cardiac data, facilitating the monitoring of
            their health. Additionally, it features quick access to emergency
            contact numbers, ensuring that you can act swiftly in case of a
            critical situation. Our goal is to provide a useful and accessible
            tool for the health care of your loved ones.
          </nativebase.Text>
        </nativebase.VStack>
      </nativebase.ScrollView>
      </nativebase.Box>
    </nativebase.Box>
  );
};

export default About;
