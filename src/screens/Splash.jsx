import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('login')
        }, 3000);
      }, [])
  return (
    <>
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View></View>
        <View style={{height:'50%',justifyContent:'flex-end',width:'100%',alignItems:'center'}}>

      <Text style={{fontSize:24,fontWeight:'700',color:'red',width:'100%',textAlign:'center'}}>Social</Text>
      <Text style={{fontSize:16,fontWeight:'400',color:'black',width:'26%',textAlign:'right'}}>Post</Text>
        </View>
        <View style={{height:'50%', justifyContent:'flex-end'}}>

      <Text style={{paddingBottom:50,color:'gray',fontSize:12,fontWeight:'400'}} >Love for Blogs</Text>
        </View>
    </View>
    </>
  )
}

export default Splash

const styles = StyleSheet.create({})