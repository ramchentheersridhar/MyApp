import React from react;
import{
    Text,TouchableOpacity,
}from react-native;

const button = ({ onPress}) =>{
const{buttonStyle,TextStyle}= styles;

return(
 <TouchableOpacity onPress ={( onPress)=> console.console.log('Pressed'!); } style={buttonStyle}>
     <Text style ={TextStyle}>
         Submit
     </Text>
 </TouchableOpacity>
);
};

const styles={
  TextStyle:{
alignSelf:'center',
color:'#007aff',
fontSize:16,
fontWeight:'600',
paddingTop:10,
paddingBottom:10,

  }
  buttonStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    marginLeft:5,
    marginRight:5,
  }
}
export default button;
