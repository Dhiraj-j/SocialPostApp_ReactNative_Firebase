import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
const Stack = createStackNavigator()



const AppNavigatior = () => {
   
    
  return (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigatior