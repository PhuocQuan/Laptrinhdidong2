import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Switch, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/images/common/logo.png')} 
              style={styles.logoIcon}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>EventHub</Text>
          </View>

          {/* Sign In Title */}
          <Text style={styles.title}>Sign in</Text>

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

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsContainer}>
            <View style={styles.rememberContainer}>
              <Switch
                trackColor={{ false: "#E4DFDF", true: "#5669FF" }}
                thumbColor={"#ffffff"}
                ios_backgroundColor="#E4DFDF"
                onValueChange={() => setIsRemember(!isRemember)}
                value={isRemember}
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInBtn} onPress={() => {}}>
            <View style={{ width: 30 }} /> 
            <Text style={styles.signInText}>SIGN IN</Text>
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

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign up</Text>
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
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#37364A',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#120D26',
    marginBottom: 20,
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
    marginBottom: 15,
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 14,
    color: '#120D26',
    marginLeft: 5,
  },
  forgotText: {
    fontSize: 14,
    color: '#120D26',
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

export default LoginScreen;
