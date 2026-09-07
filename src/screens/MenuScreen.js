import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventHomeScreen from './EventHomeScreen'; // To render the miniature version

const { width, height } = Dimensions.get('window');

const MenuScreen = ({ navigation }) => {
  const menuItems = [
    { icon: 'account-outline', title: 'My Profile' },
    { icon: 'message-processing-outline', title: 'Message', badge: 3 },
    { icon: 'calendar-month-outline', title: 'Calendar' },
    { icon: 'bookmark-outline', title: 'Bookmark' },
    { icon: 'email-outline', title: 'Contact Us' },
    { icon: 'cog-outline', title: 'Settings' },
    { icon: 'help-circle-outline', title: 'Helps & FAQs' },
    { icon: 'logout', title: 'Sign Out', onPress: () => navigation.navigate('Login') },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* MENU CONTENT (Background) */}
      <View style={styles.menuContainer}>
        <View style={styles.profileSection}>
          <Image 
            source={require('../../assets/images/screen10/avatar.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.name}>Phuoc Quan</Text>
        </View>

        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem} 
              onPress={item.onPress ? item.onPress : () => {}}
            >
              <MaterialCommunityIcons name={item.icon} size={24} color="#747688" style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.title}</Text>
              
              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.upgradeBtn}>
          <MaterialCommunityIcons name="crown" size={20} color="#00F8FF" />
          <Text style={styles.upgradeText}>Upgrade Pro</Text>
        </TouchableOpacity>
      </View>

      {/* 3D SCALED APP SCREEN (Foreground) */}
      <View style={styles.scaledAppContainer}>
        <TouchableOpacity 
          activeOpacity={1} 
          style={{ flex: 1 }} 
          onPress={() => navigation.goBack()}
        >
          {/* pointerEvents="none" prevents interactions on the miniature screen */}
          <View pointerEvents="none" style={{ flex: 1, backgroundColor: '#ffffff' }}>
            {/* The left shadow edge to make it pop like a drawer */}
            <View style={styles.drawerShadow} />
            <EventHomeScreen navigation={navigation} />
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.7,
    paddingLeft: 40,
    paddingTop: 60,
  },
  profileSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#120D26',
  },
  menuItemsContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  menuIcon: {
    width: 30,
  },
  menuText: {
    fontSize: 16,
    color: '#120D26',
    marginLeft: 10,
  },
  badge: {
    backgroundColor: '#F59762',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  upgradeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 248, 255, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    position: 'absolute',
    bottom: 50,
    left: 40,
  },
  upgradeText: {
    color: '#00F8FF',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scaledAppContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    transform: [
      { perspective: 1000 },
      { scale: 0.75 },
      { translateX: width * 0.65 }
    ],
    borderRadius: 35,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: -15, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 15,
  },
  drawerShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -20,
    width: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 10,
  }
});

export default MenuScreen;
