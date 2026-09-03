import React from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Onboarding')}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/common/logo.png')} 
            style={styles.icon}
            resizeMode="contain"
          />
          <Image 
            source={require('../../assets/images/screen1/Group 33496.png')} 
            style={styles.text}
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 58,
    height: 61, // scaling up slightly maintaining aspect ratio
    marginRight: 10,
  },
  text: {
    width: 186,
    height: 58,
  },
});

export default HomeScreen;
