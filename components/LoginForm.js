import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'transparent'}
          translucent
          androidStatusBarColor="#34495e"
        />
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="Email or User Name"
          placeholderTextColor="#F6E8E8"
          returnKeyType="next"
          onSubmitEditing={() => this.PasswordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#F6E8E8"
          secureTextEntry
          returnKeyType="go"
          ref={input => (this.PasswordInput = input)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  input: {
    height: 40,
    width: 220,
    color: 'white',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#56adb0',
  },
  textButton: {
    color: '#fff',
    backgroundColor: '#1A8B9D',
    padding: 10
  },
  signupText: {
    color: '#fff',
    marginTop: 40,
  },
});

export default LoginForm;
