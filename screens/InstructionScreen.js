import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
const InstructionScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header1} />
      <View style={styles.Header2} />
      <View style={styles.Header3}>
        <ImageBackground
          resizeMode="contain"
          source={require('../assets/bg2.jpg')}
          style={styles.BackgroundImage}
        />
        <View style={styles.HederContainer}>
          <Text style={styles.InstructionHeadText}>Start Quiz</Text>
          <Text style={styles.InstructionText}>Instructions</Text>
          <View style={styles.TextContainer}>
            <Image
              source={require('../assets/bullet3.png')}
              resizeMode="cover"
              style={styles.BulletIcon}
            />
            <Text style={styles.InstructionText1}>
              Read questions carefully.
            </Text>
          </View>
          <View style={styles.TextContainer}>
            <Image
              source={require('../assets/bullet3.png')}
              resizeMode="cover"
              style={styles.BulletIcon}
            />
            <Text style={styles.InstructionText1}>
              After submit your answer, you can get next question.
            </Text>
          </View>
          <Text style={styles.InstructionText3}>Time : 30 minutes</Text>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Quiz')}>
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
    backgroundColor: 'rgb(0,127,191)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header1: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    width: width * 0.6,
    height: height * 0.9,
  },
  Header2: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    width: width * 0.7,
    height: height * 0.85,
  },
  Header3: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.8,
    height: height * 0.8,
  },
  BackgroundImage: {
    borderRadius: 20,
    width: '100%',
    height: height * 0.3,
  },
  HederContainer: {
    alignSelf: 'center',
    marginRight: 30,
  },
  TextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  BulletIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  InstructionHeadText: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Black',
    fontSize: 38,
    textAlign: 'center',
  },
  InstructionText: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  InstructionText1: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  InstructionText3: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 16,
    width: '70%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ButtonBackground: {
    height: '100%',
    width: width * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  ButtonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 30,
    color: '#fff',
  },
});
export default InstructionScreen;
