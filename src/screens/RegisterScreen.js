import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <MaterialCommunityIcons name="arrow-left" size={28} color="#120D26" />
            </TouchableOpacity>
          </View>

          {/* Sign Up Title */}
          <Text style={styles.title}>Sign up</Text>

          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="account-outline" size={24} color="#807A7A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full name"
              placeholderTextColor="#9d9898"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Email Input */}
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

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signInBtn} onPress={() => {}}>
            <View style={{ width: 30 }} /> 
            <Text style={styles.signInText}>SIGN UP</Text>
            <View style={styles.arrowContainer}>
              <MaterialCommunityIcons name="arrow-right" size={20} color="#ffffff" />
            </View>
          </TouchableOpacity>

          {/* OR Divider */}
          <Text style={styles.orText}>OR</Text>

          {/* Google Login */}
          <TouchableOpacity style={styles.socialBtn}>
            <Image 
              source={require('../../assets/images/screen5,6/Group 18559.png')} 
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Login with Google</Text>
          </TouchableOpacity>

          {/* Facebook Login */}
          <TouchableOpacity style={styles.socialBtn}>
            <Image 
              source={require('../../assets/images/screen5,6/Group 18560.png')} 
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Login with Facebook</Text>
          </TouchableOpacity>

          {/* Sign In Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signUpText}>Signin</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
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
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
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
  signInBtn: {
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
  signInText: {
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
  orText: {
    fontSize: 16,
    color: '#9d9898',
    fontWeight: '600',
    marginBottom: 20,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#d3d1d8',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  socialIcon: {
    width: 26,
    height: 26,
    position: 'absolute',
    left: 40,
  },
  socialText: {
    fontSize: 16,
    color: '#120D26',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 15,
    color: '#120D26',
  },
  signUpText: {
    fontSize: 15,
    color: '#5669FF',
  }
});

export default RegisterScreen;
