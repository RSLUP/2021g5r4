import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const HeaderComponent = ({
  ScreenName,
  ScreenText,
  Navigation,
  NavigationScreen,
  NavigationScreenName,
}) => {
  return (
    <View>
      <View style={styles.Header1}>
        <View style={styles.HeaderText}>
          <View style={styles.Name}>
            <Text style={styles.NameText1}>Geni</Text>
            <Text style={styles.NameText2}>Q</Text>
          </View>
          <Text style={styles.SignInText}>{ScreenName}</Text>
          <View style={styles.NavigationText}>
            <Text style={styles.NavigationText1}>{ScreenText}</Text>
            <TouchableOpacity
              onPress={() => Navigation.navigate(NavigationScreen)}>
              <Text style={styles.NavigationText2}>{NavigationScreenName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.Header2} />
      <View style={styles.Header3} />
    </View>
  );
};

const styles = StyleSheet.create({
  Header1: {
    height: height * 0.27,
    backgroundColor: 'rgb(0,127,191)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  Header2: {
    height: height * 0.03,
    width: width / 1.1,
    backgroundColor: 'rgba(0,127,191,0.6)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignSelf: 'center',
  },
  Header3: {
    height: height * 0.03,
    width: width / 1.3,
    backgroundColor: 'rgba(0,127,191,0.3)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignSelf: 'center',
  },
  HeaderText: {
    paddingTop: 50,
    paddingLeft: 40,
  },
  Name: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  NameText1: {
    color: '#87cefa',
    lineHeight: 36,
    fontFamily: 'Roboto-Black',
    fontSize: 36,
  },
  NameText2: {
    color: '#fff',
    lineHeight: 36,
    fontFamily: 'Roboto-Black',
    fontSize: 36,
  },
  SignInText: {
    color: '#fff',
    lineHeight: 30,
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    paddingBottom: 5,
  },
  NavigationText: {
    flexDirection: 'row',
  },
  NavigationText1: {
    color: '#fff',
    lineHeight: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  NavigationText2: {
    color: '#87cefa',
    lineHeight: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});

export default HeaderComponent;
