import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ButtonComponent = ({
  Navigation,
  ButtonName,
  NavigationScreen,
  DBFunction,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.shadow, styles.button]}
        onPress={() => Navigation.navigate(NavigationScreen)}>
        <LinearGradient
          style={styles.ButtonBackground}
          colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text style={styles.ButtonText}>{ButtonName}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 10,
    width: '100%',
    height: 50,
    alignSelf: 'center',
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
    fontSize: 22,
    lineHeight: 30,
    color: '#fff',
  },
});

export default ButtonComponent;
