import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Logo from '../components/Logo';
const {height} = Dimensions.get('window');
const LeaderBoardScreen = ({navigation}) => {
  return (
    <View style={styles.FullScreen}>
      <View style={styles.Header}>
        <Logo onPress={() => navigation.navigate('SignInScreen')} />
        <Text style={styles.HeaderTopText}>Leaderboard</Text>
        <View style={styles.TopThreePlaces}>
          <View style={[styles.Place, {marginTop: 50}]}>
            <Image
              source={require('../assets/user/user-3.jpg')}
              resizeMode="contain"
              style={styles.UserImage}
            />
            <Image
              source={require('../assets/badges/2nd.png')}
              resizeMode="contain"
              style={styles.BadgeImage}
            />
            <View style={styles.PlaceText}>
              <Text style={styles.PlaceName}>Diana Trout</Text>
              <Text style={styles.PlaceScore}>200</Text>
            </View>
          </View>
          <View style={styles.Place}>
            <Image
              source={require('../assets/user/user-2.jpg')}
              resizeMode="contain"
              style={styles.UserImage}
            />
            <Image
              source={require('../assets/badges/1st.png')}
              resizeMode="contain"
              style={styles.BadgeImage}
            />
            <View style={styles.PlaceText}>
              <Text style={styles.PlaceName}>Peter Dais</Text>
              <Text style={styles.PlaceScore}>380</Text>
            </View>
          </View>
          <View style={[styles.Place, {marginTop: 50}]}>
            <Image
              source={require('../assets/user/user-4.jpg')}
              resizeMode="contain"
              style={styles.UserImage}
            />
            <Image
              source={require('../assets/badges/3rd.png')}
              resizeMode="contain"
              style={styles.BadgeImage}
            />
            <View style={styles.PlaceText}>
              <Text style={styles.PlaceName}>John Piterson</Text>
              <Text style={styles.PlaceScore}>158</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Bottom}>
        <View style={styles.Card}>
          <View style={styles.CardImageContext}>
            <Text style={styles.CardName}>4</Text>
            <Image
              source={require('../assets/user/user-1.jpg')}
              resizeMode="contain"
              style={styles.UserCardImage}
            />
          </View>
          <Text style={styles.CardName}>John Murray</Text>
          <Text style={styles.CardScore}>145</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.CardImageContext}>
            <Text style={styles.CardName}>5</Text>
            <Image
              source={require('../assets/user/user-6.jpg')}
              resizeMode="contain"
              style={styles.UserCardImage}
            />
          </View>
          <Text style={styles.CardName}>Liza Miller</Text>
          <Text style={styles.CardScore}>138</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.CardImageContext}>
            <Text style={styles.CardName}>6</Text>
            <Image
              source={require('../assets/user/user-5.jpg')}
              resizeMode="contain"
              style={styles.UserCardImage}
            />
          </View>
          <Text style={styles.CardName}>Emiliya Clarck</Text>
          <Text style={styles.CardScore}>111</Text>
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
    height: height * 0.53,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 45,
    paddingLeft: 22,
    paddingRight: 22,
  },
  HeaderTopText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 28,
  },
  TopThreePlaces: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Place: {
    backgroundColor: '#fff',
    padding: 5,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  UserImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  BadgeImage: {
    position: 'absolute',
    paddingTop: 200,
    marginLeft: 50,
    height: 55,
    width: 55,
  },
  PlaceText: {
    paddingTop: 25,
    alignItems: 'center',
  },
  PlaceName: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  PlaceScore: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Black',
    fontSize: 20,
  },
  Bottom: {
    paddingTop: 10,
    paddingLeft: 22,
    paddingRight: 22,
  },
  Card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,127,191,0.1)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  CardImageContext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  UserCardImage: {
    height: 45,
    width: 45,
    borderRadius: 100,
    marginLeft: 15,
  },
  CardName: {
    color: '#696969',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  CardScore: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Black',
    fontSize: 18,
    paddingRight: 10,
  },
});

export default LeaderBoardScreen;
