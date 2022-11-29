import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
      <Text style={{fontSize:20,alignSelf:'center' , color:'#000', }}>Login</Text>
      <TextInput placeholder='Enter valid Email ID' style={{width:'90%',borderWidth:1,borderRadius:10, paddingLeft:10, marginTop:20}}/>
      <TextInput secureTextEntry={true} placeholder='Enter your Password'  style={{width:'90%',borderWidth:1,borderRadius:10, marginTop:20,paddingLeft:10}}/>
      <TouchableOpacity style={{marginTop:20, width:'90%', height:50,backgroundColor:'#5B48DE',justifyContent:'center',alignItems:'center', borderRadius:15}}>
        <Text style={{color:'#fff'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}>

      <Text style={{fontSize:16, marginTop:20 , color:'#5B48DE'}}>Want to create new Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})