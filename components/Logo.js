import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwsomeIcons from 'react-native-vector-icons/FontAwesome';
const Logo = ({onPress}) => {
  return (
    <View style={styles.HeaderTop}>
      <View style={styles.LeftHeader}>
        <Text style={styles.NameText1}>Geni</Text>
        <Text style={styles.NameText2}>Q</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <FontAwsomeIcons name="sign-out" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  LeftHeader: {
    flexDirection: 'row',
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
});

export default Logo;
