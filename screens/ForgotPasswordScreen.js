import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import TextInputComponent from '../components/TextInputComponent';
Keyboard.dismiss();

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.Container}>
        <HeaderComponent
          ScreenName="Forgot Password"
          ScreenText="Forgot your password? Don't worry"
        />
        <View style={styles.Bottom}>
          <TextInputComponent InputName="Email" IconName="envelope" />
          <ButtonComponent
            ButtonName="Recovery Password"
            Navigation={navigation}
            NavigationScreen="SignInScreen"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Bottom: {
    flex: 1.75,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default ForgotPasswordScreen;
