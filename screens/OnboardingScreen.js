import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height} = Dimensions.get('window');
const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'white-content'}
        translucent={true}
      />
      <View style={styles.ImageContainer}>
        <ImageBackground
          source={require('../assets/bg1.jpg')}
          resizeMode="cover"
          style={styles.BackgroundImage}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['transparent', '#000']}
            style={styles.LinearGradientBackground}>
            <Text style={styles.TitleText}>
              Enjoy Your Learnings, Only From Us
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.DescriptionContainer}>
        <Text style={styles.DescriptionText}>
          Grow your Skills to Advance your Career path.
        </Text>
        <TouchableOpacity
          style={[styles.shadow, styles.button]}
          onPress={() => navigation.navigate('SignInScreen')}>
          <LinearGradient
            style={styles.ButtonBackground}
            colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={styles.ButtonText}>Start</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000',
  },
  ImageContainer: {
    height: height > 700 ? '85%' : '80%',
  },
  BackgroundImage: {
    flex: 5,
    justifyContent: 'center',
  },
  LinearGradientBackground: {
    height: 550,
    justifyContent: 'flex-end',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  TitleText: {
    width: '80%',
    color: '#fff',
    lineHeight: 36,
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    textAlign: 'center',
  },
  DescriptionContainer: {
    flex: 0.5,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  DescriptionText: {
    width: '80%',
    color: '#777777',
    fontFamily: 'Roboto-Regular',
    lineHeight: 22,
    fontSize: 18,
    textAlign: 'center',
    paddingTop: '1%',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginTop: 16,
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  ButtonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    lineHeight: 30,
    color: '#fff',
  },
});

export default OnboardingScreen;
