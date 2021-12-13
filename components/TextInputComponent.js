import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TextInputComponent = ({
  InputName,
  IconName,
  secureTextEntry,
  Name,
  setName,
}) => {
  return (
    <View>
      <Text style={styles.TextInputText}>{InputName}</Text>
      <View style={styles.TextInputContainer}>
        <SimpleLineIcons name={IconName} size={20} color="#6b6b6b" />
        <TextInput
          style={styles.TextInput}
          value={Name}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={'#6b6b6b'}
          onChangeText={Name => setName(Name)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputText: {
    color: '#6b6b6b',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingBottom: 5,
  },
  TextInputContainer: {
    backgroundColor: '#d6d6d6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  TextInput: {
    width: '80%',
    marginLeft: 10,
  },
});

export default TextInputComponent;
