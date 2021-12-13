import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwsomeIcons from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo';
const {height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.FullScreen}>
      <View style={styles.Header}>
        <Logo onPress={() => navigation.navigate('SignInScreen')} />
        <View style={styles.HeaderTop}>
          <Text style={styles.HeaderTopText}>Profile</Text>
        </View>
        <View style={styles.HeaderMiddle}>
          <Image
            source={require('../assets/user/user-1.jpg')}
            resizeMode="contain"
            style={styles.UserImage}
          />
          <Text style={styles.HeaderMiddleText}>John Murray</Text>
        </View>
        <View style={styles.HeaderBottom}>
          <TouchableOpacity style={styles.BottomButton}>
            <Text style={styles.ButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BottomButton}>
            <Text style={styles.ButtonText}>Add New Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Bottom}>
        <View style={styles.CardContainer}>
          <View style={styles.Card}>
            <Image
              source={require('../assets/badges/score.png')}
              resizeMode="contain"
              style={styles.CardImage}
            />
            <View style={styles.CardTextSection}>
              <Text style={styles.CardText1}>Score</Text>
              <Text style={styles.CardText2}>5000</Text>
            </View>
          </View>
          <View style={styles.Card}>
            <Image
              source={require('../assets/badges/victory.png')}
              resizeMode="contain"
              style={styles.CardImage}
            />
            <View style={styles.CardTextSection}>
              <Text style={styles.CardText1}>Quizes</Text>
              <Text style={styles.CardText2}>100</Text>
            </View>
          </View>
        </View>
        <Text style={styles.SectionTitle}>Badges</Text>
        <View style={styles.BadgeContainer}>
          <View style={styles.Badge}>
            <Image
              source={require('../assets/badges/badge1.png')}
              resizeMode="contain"
              style={styles.BadgeImage}
            />
          </View>
          <View style={styles.Badge}>
            <Image
              source={require('../assets/badges/badge3.png')}
              resizeMode="contain"
              style={styles.BadgeImage}
            />
          </View>
          <View style={styles.Badge}>
            <Image
              source={require('../assets/badges/badge4.png')}
              resizeMode="contain"
              style={styles.BadgeImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FullScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    backgroundColor: 'rgb(0,127,191)',
    height: height * 0.54,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 45,
    paddingLeft: 22,
    paddingRight: 22,
  },
  HeaderTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderTopText: {
    color: '#fff',
    paddingLeft: 10,
    fontFamily: 'Roboto-Black',
    fontSize: 28,
  },
  HeaderMiddle: {
    alignItems: 'center',
    paddingTop: 10,
  },
  UserImage: {
    height: 125,
    width: 125,
    borderRadius: 100,
  },
  HeaderMiddleText: {
    paddingTop: 10,
    color: '#fff',
    paddingLeft: 10,
    fontFamily: 'Roboto-Black',
    fontSize: 28,
  },
  HeaderBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    width: 150,
  },
  ButtonText: {
    textAlign: 'center',
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  Bottom: {
    paddingLeft: 22,
    paddingRight: 22,
  },
  BadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SectionTitle: {
    paddingTop: 5,
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    paddingBottom: 5,
  },
  Badge: {
    backgroundColor: 'rgba(0,127,191,0.4)',
    padding: 5,
    borderRadius: 10,
  },
  BadgeImage: {
    height: 100,
    width: 100,
  },
  CardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  Card: {
    backgroundColor: 'rgba(0,127,191,0.2)',
    padding: 10,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  CardImage: {
    height: 65,
    width: 65,
  },
  CardTextSection: {
    paddingRight: 30,
    alignItems: 'center',
  },
  CardText1: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },
  CardText2: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Black',
    fontSize: 16,
  },
});

export default ProfileScreen;
