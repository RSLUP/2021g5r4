import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/HeaderComponent';
import TextInputComponent from '../components/TextInputComponent';
Keyboard.dismiss();

const SignInScreen = ({navigation}) => {
  const [user_email, setUser_email] = useState('');
  const [user_password, setUser_password] = useState('');
  const [submit, setSubmit] = useState('');
  const [message, setMessage] = useState('');

  const InsertRecord = () => {
    var email = user_email;
    var password = user_password;
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.length == 0 || password.length == 0) {
      Alert.alert('Required Fields are Missing.');
    } else {
      if (reg.test(email) == 0) {
        Alert.alert('Enter Valid Email Address.');
      } else {
        var InsertAPIURL = 'http://10.0.2.2:80/database/login.php';
        var headers = {
          Accept: 'application/json',
          'Content-Type': 'application.json',
        };
        var Data = {
          email: user_email,
          password: user_password,
        };
        fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data),
        })
          .then(respose => respose.json())
          .then(response => {
            setMessage(response[0].Message);
            alert(message);
          })
          .catch(error => {
            alert('Error' + error);
          });
      }
    }
  };

  const OnSubmit = () => {
    if (message == 'Login Successful.') {
      console.log(message);
      setSubmit(InsertRecord);
      navigation.navigate('HomeScreen');
    } else {
      console.log(message);
      setSubmit(InsertRecord);
    }
  };

  return (
    <ScrollView style={styles.FullScreen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.Container}>
          <HeaderComponent
            ScreenName="Sign In"
            ScreenText="Don't have an account?"
            Navigation={navigation}
            NavigationScreen="SignUpScreen"
            NavigationScreenName=" Sign Up"
          />
          <View style={styles.Bottom}>
            <TextInputComponent
              InputName="Email"
              IconName="envelope"
              secureTextEntry={false}
              Name={user_email}
              setName={setUser_email}
            />
            <TextInputComponent
              InputName="Password"
              IconName="lock-open"
              secureTextEntry={true}
              Name={user_password}
              setName={setUser_password}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.ForgotText}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shadow, styles.button]}
              onPress={OnSubmit}>
              <LinearGradient
                style={styles.ButtonBackground}
                colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Text style={styles.ButtonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  FullScreen: {
    backgroundColor: '#fff',
  },
  Container: {
    flex: 1,
  },
  Bottom: {
    flex: 1.75,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  ForgotText: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingBottom: 5,
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

export default SignInScreen;
