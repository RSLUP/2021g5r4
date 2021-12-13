import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/HeaderComponent';
import TextInputComponent from '../components/TextInputComponent';
Keyboard.dismiss();

const SignUpScreen = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [user_email, setUser_email] = useState('');
  const [user_password, setUser_password] = useState('');
  const [comfirm_pass, setComfirm_pass] = useState('');
  const [submit, setSubmit] = useState('');

  const InsertRecord = () => {
    var full_name = fName;
    var email = user_email;
    var password = user_password;
    var comfirm_password = comfirm_pass;
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      full_name.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      comfirm_password.length == 0
    ) {
      Alert.alert('Required Fields are Missing.');
    } else {
      if (reg.test(email) == 0) {
        Alert.alert('Enter Valid Email Address.');
      } else if (password != comfirm_password) {
        Alert.alert('Password and Confirm Password are not Equal');
      } else {
        var InsertAPIURL = 'http://10.0.2.2:80/database/register.php';
        var headers = {
          Accept: 'application/json',
          'Content-Type': 'application.json',
        };
        var Data = {
          full_name: fName,
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
            alert(response[0].Message);
          })
          .catch(error => {
            alert('Error' + error);
          });
      }
    }
  };

  const OnSubmit = () => {
    setSubmit(InsertRecord);
    navigation.navigate('SignInScreen');
  };

  return (
    <ScrollView style={styles.FullScreen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.Container}>
          <HeaderComponent
            ScreenName="Register New Account"
            ScreenText="Already have an account?"
            Navigation={navigation}
            NavigationScreen="SignInScreen"
            NavigationScreenName=" Sign In"
          />
          <View style={styles.Bottom}>
            <TextInputComponent
              InputName="Full Name"
              IconName="user"
              secureTextEntry={false}
              Name={fName}
              setName={setFName}
            />
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
            <TextInputComponent
              InputName="Confirm Password"
              IconName="lock-open"
              secureTextEntry={true}
              Name={comfirm_pass}
              setName={setComfirm_pass}
            />
            <TouchableOpacity
              style={[styles.shadow, styles.button]}
              onPress={OnSubmit}>
              <LinearGradient
                style={styles.ButtonBackground}
                colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Text style={styles.ButtonText}>Sign Up</Text>
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
    flex: 2,
    paddingTop: 15,
    paddingLeft: 50,
    paddingRight: 50,
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

export default SignUpScreen;
