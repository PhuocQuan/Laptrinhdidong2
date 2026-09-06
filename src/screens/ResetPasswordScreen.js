import React, { useState } from 'react';
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

const ResetPasswordScreen = ({ navigation }) => {
  const [step, setStep] = useState(1); // 1: Email Input, 2: New Password Input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSend = () => {
    if (step === 1) {
      if (!email) {
        Alert.alert('Error', 'Please enter your email address');
        return;
      }
      // Transition to step 2
      setStep(2);
    } else if (step === 2) {
      if (!password || !confirmPassword) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
      
      Alert.alert(
        "Success",
        "Your password has been reset successfully.",
        [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]
      );
    }
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
          <Text style={styles.title}>Reset Password</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            {step === 1 
              ? "Please enter your email address to\nrequest a password reset"
              : "Please enter your new password to\nreset your account"}
          </Text>

          {/* Conditional Inputs based on Step */}
          {step === 1 ? (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="email-outline" size={24} color="#807A7A" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="abc@email.com"
                placeholderTextColor="#9d9898"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          ) : (
            <View>
              {/* Password Input */}
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="lock-outline" size={24} color="#807A7A" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Your password"
                  placeholderTextColor="#9d9898"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                  <MaterialCommunityIcons 
                    name={showPassword ? "eye-outline" : "eye-off-outline"} 
                    size={22} 
                    color="#807A7A" 
                  />
                </TouchableOpacity>
              </View>

              {/* Confirm Password Input */}
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="lock-outline" size={24} color="#807A7A" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  placeholderTextColor="#9d9898"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                  <MaterialCommunityIcons 
                    name={showConfirmPassword ? "eye-outline" : "eye-off-outline"} 
                    size={22} 
                    color="#807A7A" 
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Send Button */}
          <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
            <View style={{ width: 30 }} /> 
            <Text style={styles.sendText}>SEND</Text>
            <View style={styles.arrowContainer}>
              <MaterialCommunityIcons name="arrow-right" size={20} color="#ffffff" />
            </View>
          </TouchableOpacity>

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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#120D26',
  },
  eyeIcon: {
    padding: 5,
  },
  sendBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5669FF',
    width: '100%',
    height: 58,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  sendText: {
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
  }
});

export default ResetPasswordScreen;
