import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyPets from './src/screens/MyPets'
import MyGallery from './src/screens/MyGallery'
import Home from './src/screens/Home'
import { ModalPortal } from 'react-native-modals';
import Profile from './src/screens/Profile'
import DrawerIcon from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DemoScreen from './src/screens/DemoScreen'

// const TabStack = createMaterialTopTabNavigator();
// const NavFlow = () => {
//   return (
//     <TabStack.Navigator>
//       <TabStack.Screen name='My Pets' component={MyPets} />
//       <TabStack.Screen name='My Gallery' component={MyGallery} />
//     </TabStack.Navigator>
//   )
// }

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='MyProfile' component={Profile} options={{
          headerTintColor: 'white',
          title: 'My Profile',
          headerTransparent: true,
          headerShadowVisible: false,
          headerRight: () => <TouchableOpacity><DrawerIcon size={30} color={'white'} name='md-reorder-two-sharp' /></TouchableOpacity>,
          headerLeft: () => <TouchableOpacity><Ionicons name="arrow-back-sharp" size={22} color="white" style={{ marginRight: 7, marginTop: 1, marginLeft: 3 }} /></TouchableOpacity>
        }} />
      </Stack.Navigator>
      <ModalPortal />
    </NavigationContainer>
  )
}

export default App
