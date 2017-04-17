/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//-------------------------------------------------------------------------------------------------
import React, { Component } from 'react';
import
{
  AppRegistry,StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Card,CardSection,
}
 from 'react-native';
//--------------------------import------------------------------------------------------------------
import Card from './Card';
import button from './button'
import ReactNative from 'react-native';
import Login from './android/src/components/login/login';
//--------------------------import---------------------------------------------------------------------
export default class MyApp extends Component {
  render() {
    return (
      //------Card---------------
      <Card>
        <CardSection>
          <View>
              <Image source ={{uri:props.images.octocat.png }} />
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={()=> console.log(title)}/>
        </CardSection>
      </Card>
      //----------Card-----------
      //----------View-------------------------------
<View style={styles.container}>
            <Text style={styles.welcome}>
               Login
            </Text>
            <Text style={styles.instructions}>
               Enter your id..
            </Text>
      <View style={styles.container1}>
            <TextInput style = {styles.searchInput} Placeholder="Enter Text"/>
            <TouchableHighlight style ={styles.button} underlayColor ='#99d9f4' onPress={ ()=><button/> }>
                 <Text style ={styles.buttonText}>
                       Submit
                 </Text>
            </TouchableHighlight>
      </View>
</View>
//------------View---------------------------------------------------------------------
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
  searchInput: {
    height:50,
    width:300,
    fontSize:20,
    borderWidth:1,
    color:'black',
    borderColor:'#48BBEC',
    borderRadius:1,
  },
  buttonText :{
    fontSize:20,
    color:'white',
    alignSelf:'center',
  },
  button:{
    height:50,
    backgroundColor:'#48BBEC',
    borderColor:'#48BBEC',
    marginLeft:110,
    width:80,
    alignSelf:'stretch',
    justifyContent:'center',
  },
container1:{

  flexDirection:'column',

}
});

AppRegistry.registerComponent('MyApp', () => MyApp);
