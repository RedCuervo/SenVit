import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>About us.</Text>
        <Text style={[styles.content, {textAlign: 'justify'}]}>
        This application is designed to connect to a smartwatch that transmits
         the wearer's heart rate, allowing for a detailed record of the cardiac
          behavior of elderly individuals. The application provides a complete 
          history of the user's cardiac data, facilitating the monitoring of 
          their health. Additionally, it features quick access to emergency 
          contact numbers, ensuring that you can act swiftly in case of a 
          critical situation. Our goal is to provide a useful and accessible 
          tool for the health care of your loved ones.
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

export default About;