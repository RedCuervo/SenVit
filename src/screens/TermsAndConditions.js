import React from 'react';
import * as nativebase from 'native-base';
import HeaderTitle from '../modules/HeaderTitle';
import TermsAndConditionsText from '../modules/TermsAndConditionsModule';
const TermsAndConditions = ({navigation}) => {
  const { colorMode } = nativebase.useColorMode();
  const backgroundColor = colorMode === 'light' ? 'LightBackground.hex' : 'DarkBackground.hex';
  return (

    <nativebase.Box w={"100%"} flex={1} m={0} bg={backgroundColor}>
      <HeaderTitle
      title="Terms and Conditions"
      navigation={navigation}
      />
      <TermsAndConditionsText/>
      </nativebase.Box>
  );
};

export default TermsAndConditions;
