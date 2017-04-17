import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
export default class Login extends Component {
  render() {
    return(

<View style={styles.container}>
<Text style={styles.welcome}>Welcome! You all</Text>
<Text style ={styles.text}>Your Login request is Successfully done.</Text>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2bbfff'
  },
  welcome:{
   textAlign:'center',
   fontSize:30,
   color:'white'
 },
 text:{
   textAlign:'center',
   fontSize:20,
   color:'white',
 },
 octo:{
   width:20,
   height:20,
 }
});
