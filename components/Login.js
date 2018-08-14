import React from 'react';
import { StyleSheet, Text, View,Image,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Image
             source={require('../assets/expo.symbol.white.png')}
              style={styles.logo}
          />
          <Text style={styles.title}>
            Sangam
          </Text>
          <LoginForm/>
        </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding:40,
      flex:1,
    },
    logo:{
      width:150,
      height:100
    },
    title:{
      color:'#fff',
      marginTop:10,
      width:300,
      opacity:0.9,
      textAlign:'center',
      fontSize:30
    }
  });
  