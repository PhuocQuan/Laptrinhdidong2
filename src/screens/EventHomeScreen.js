import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const EventHomeScreen = ({ navigation }) => {

  const categories = [
    { id: 1, name: 'Sports', icon: 'basketball-ball', color: '#F0635A' },
    { id: 2, name: 'Music', icon: 'music', color: '#F59762' },
    { id: 3, name: 'Food', icon: 'utensils', color: '#29D697' },
    { id: 4, name: 'Art', icon: 'palette', color: '#46CDFB' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'International Band Mu...',
      date: '10',
      month: 'JUNE',
      location: '36 Guild Street London, UK',
      image: require('../../assets/images/screen9/image 80.png'),
    },
    {
      id: 2,
      title: "Jo Malone London's Mo...",
      date: '10',
      month: 'JUNE',
      location: 'Radius Gallery, Santa Cruz',
      image: require('../../assets/images/screen9/image 84.png'),
    },
    {
      id: 3,
      title: "Women's Leadership Co...",
      date: '12',
      month: 'JUNE',
      location: '52nd Street, New York',
      image: require('../../assets/images/screen9/image 87.png'),
    },
    {
      id: 4,
      title: 'International Kids Safe...',
      date: '15',
      month: 'JUNE',
      location: 'Radius Gallery, Santa Cruz',
      image: require('../../assets/images/screen9/image 88.png'),
    }
  ];

  const avatars = [
    require('../../assets/images/screen9/1.png'),
    require('../../assets/images/screen9/2.png'),
    require('../../assets/images/screen9/3.png'),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A43EC" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* TOP BLUE SECTION */}
        <View style={styles.topSection}>
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="menu" size={28} color="#ffffff" />
            </TouchableOpacity>
            
            <View style={styles.locationContainer}>
              <Text style={styles.currentLocation}>Current Location <MaterialCommunityIcons name="menu-down" size={16} color="#ffffff" /></Text>
              <Text style={styles.locationText}>New Yourk, USA</Text>
            </View>

            <TouchableOpacity style={styles.notificationBtn}>
              <MaterialCommunityIcons name="bell-outline" size={20} color="#ffffff" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <MaterialCommunityIcons name="magnify" size={24} color="#ffffff" style={styles.searchIcon} />
            <View style={styles.divider} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#rgba(255, 255, 255, 0.5)"
            />
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={18} color="#ffffff" />
              <Text style={styles.filterText}>Filters</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* CATEGORIES SECTION (Overlapping) */}
        <View style={styles.categoriesWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
            {categories.map((cat) => (
              <TouchableOpacity key={cat.id} style={[styles.categoryBtn, { backgroundColor: cat.color }]}>
                <FontAwesome5 name={cat.icon} size={16} color="#ffffff" />
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* UPCOMING EVENTS SECTION */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllText}>See All</Text>
            <MaterialCommunityIcons name="menu-right" size={20} color="#747688" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.eventsContainer}>
          {upcomingEvents.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <View style={styles.imageContainer}>
                <Image source={event.image} style={styles.eventImage} resizeMode="cover" />
                <View style={styles.dateBadge}>
                  <Text style={styles.dateNumber}>{event.date}</Text>
                  <Text style={styles.dateMonth}>{event.month}</Text>
                </View>
                <TouchableOpacity style={styles.bookmarkBtn}>
                  <MaterialCommunityIcons name="bookmark" size={18} color="#F0635A" />
                </TouchableOpacity>
              </View>
              
              <Text style={styles.eventTitle}>{event.title}</Text>
              
              <View style={styles.goingContainer}>
                <View style={styles.avatarsWrapper}>
                  {avatars.map((avatar, i) => (
                    <Image key={i} source={avatar} style={[styles.avatar, { marginLeft: i > 0 ? -10 : 0, zIndex: 3 - i }]} />
                  ))}
                </View>
                <Text style={styles.goingText}>+20 Going</Text>
              </View>
              
              <View style={styles.locationWrapper}>
                <MaterialCommunityIcons name="map-marker" size={16} color="#747688" />
                <Text style={styles.locationDetail} numberOfLines={1}>{event.location}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* INVITE BANNER */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Invite your friends</Text>
            <Text style={styles.bannerSub}>Get $20 for ticket</Text>
            <TouchableOpacity style={styles.inviteBtn}>
              <Text style={styles.inviteText}>INVITE</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/images/screen9/gift.png')} style={styles.giftImage} resizeMode="contain" />
        </View>

        {/* NEARBY YOU SECTION */}
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <Text style={styles.sectionTitle}>Nearby You</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllText}>See All</Text>
            <MaterialCommunityIcons name="menu-right" size={20} color="#747688" />
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* BOTTOM TAB BAR */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="compass" size={24} color="#4A43EC" />
          <Text style={[styles.tabText, { color: '#4A43EC' }]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="calendar-month" size={24} color="#dadada" />
          <Text style={styles.tabText}>Events</Text>
        </TouchableOpacity>
        
        <View style={styles.addBtnWrapper}>
          <TouchableOpacity style={styles.addBtn}>
            <MaterialCommunityIcons name="plus-box-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="map-marker" size={24} color="#dadada" />
          <Text style={styles.tabText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="account" size={24} color="#dadada" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  topSection: {
    backgroundColor: '#4A43EC',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    alignItems: 'center',
  },
  currentLocation: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  locationText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationBtn: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#02E9FE',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4A43EC',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: '#ffffff',
    padding: 0, // Remove default padding
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterText: {
    color: '#ffffff',
    fontSize: 12,
    marginLeft: 5,
  },
  categoriesWrapper: {
    marginTop: -25,
    marginBottom: 25,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120D26',
  },
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#747688',
  },
  eventsContainer: {
    paddingHorizontal: 20,
  },
  eventCard: {
    width: width * 0.6,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 130,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  dateBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0635A',
  },
  dateMonth: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#F0635A',
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  goingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarsWrapper: {
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  goingText: {
    fontSize: 12,
    color: '#3F38DD',
    fontWeight: '600',
    marginLeft: 8,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDetail: {
    fontSize: 13,
    color: '#747688',
    marginLeft: 5,
    flex: 1,
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: '#E0F7F9',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
    zIndex: 2,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120D26',
    marginBottom: 5,
  },
  bannerSub: {
    fontSize: 13,
    color: '#484D70',
    marginBottom: 15,
  },
  inviteBtn: {
    backgroundColor: '#00F8FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  inviteText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  giftImage: {
    position: 'absolute',
    right: -25,
    bottom: -15,
    width: 170,
    height: 170,
    zIndex: 1,
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 10,
    color: '#dadada',
    marginTop: 4,
    fontWeight: '500',
  },
  addBtnWrapper: {
    marginTop: -35,
  },
  addBtn: {
    width: 56,
    height: 56,
    backgroundColor: '#4A43EC',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4A43EC',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  }
});

export default EventHomeScreen;
