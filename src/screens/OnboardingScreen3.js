import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Section - Phone Mockup */}
      <View style={styles.topSection}>
        <View style={styles.mockupContainer}>
          <Image 
            source={require('../../assets/images/common/phone-shape.png')} 
            style={styles.phoneShape}
            resizeMode="contain"
          />
          <Image 
            source={require('../../assets/images/screen4/Map View 1.png')} 
            style={styles.screenContent}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Bottom Section - Blue Card */}
      <View style={styles.bottomSection}>
        <SafeAreaView>
          <Text style={styles.title}>To Look Up More Events or{'\n'}Activities Nearby By Map</Text>
          <Text style={styles.subtitle}>
            In publishing and graphic design, Lorem is{'\n'}a placeholder text commonly
          </Text>

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.footerText}>Skip</Text>
            </TouchableOpacity>

            <View style={styles.pagination}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={[styles.dot, styles.activeDot]} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerText}>Next</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topSection: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  mockupContainer: {
    width: width * 0.72, 
    aspectRatio: 270 / 460, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneShape: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  screenContent: {
    width: '88%', 
    height: '96%',
    borderRadius: 24, 
    zIndex: 0,
    marginTop: '-1%',
  },
  bottomSection: {
    backgroundColor: '#5669FF', // EventHub standard blue color
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#ffffff',
  },
});

export default OnboardingScreen3;
