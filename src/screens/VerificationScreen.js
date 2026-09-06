import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  TextInput,
  Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VerificationScreen = ({ navigation, route }) => {
  // Retrieve phone number from params, fallback to a dummy if none
  const phoneNumber = route.params?.phoneNumber || '+1 2620 0323 7631';
  
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (timer === 0) {
      setTimer(60);
      setCode(['', '', '', '']);
      inputRefs[0].current.focus();
    }
  };

  const handleChange = (text, index) => {
    // Only accept numbers
    const value = text.replace(/[^0-9]/g, '');
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Auto-backspace to previous input
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleContinue = () => {
    const isComplete = code.every(digit => digit !== '');
    if (isComplete) {
      Alert.alert(
        "Verification Successful",
        "Your phone number has been verified successfully.",
        [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]
      );
    } else {
      Alert.alert('Error', 'Please enter all 4 digits');
    }
  };

  // Format timer as 0:SS
  const formatTime = (time) => {
    const seconds = time % 60;
    return `0:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <MaterialCommunityIcons name="arrow-left" size={28} color="#120D26" />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.title}>Verification</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            We've send you the verification{'\n'}code on {phoneNumber}
          </Text>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={[styles.otpInput, digit !== '' ? styles.otpInputActive : null]}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
            <View style={{ width: 30 }} /> 
            <Text style={styles.continueText}>CONTINUE</Text>
            <View style={styles.arrowContainer}>
              <MaterialCommunityIcons name="arrow-right" size={20} color="#ffffff" />
            </View>
          </TouchableOpacity>

          {/* Resend Timer */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
              Re-send code in  
            </Text>
            <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
              <Text style={[styles.timerText, timer === 0 && styles.timerTextActive]}>
                {timer > 0 ? formatTime(timer) : 'Resend'}
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    marginLeft: -5,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#120D26',
    marginBottom: 10,
  },
  subtitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#120D26',
    lineHeight: 24,
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#120D26',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  otpInputActive: {
    borderColor: '#5669FF',
  },
  continueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5669FF',
    width: '100%',
    height: 58,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  continueText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  arrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#120D26',
  },
  timerText: {
    fontSize: 16,
    color: '#5669FF',
    marginLeft: 5,
  },
  timerTextActive: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});

export default VerificationScreen;
