import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'native-base'
import {TabNavigator} from 'react-navigation'

import MainScreen from './MainScreen';
import MapTab from './AppTabNavigator/MapTab';


const AppStackNavigator = StackNavigator({
  First:{
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft : <Icon name="ios-camera-outline" style = {{paddingLeft: 10}} />,
      title: <Text style={{color:'red', fontWeight:'800', fontSize:18}}> BuzzFeed </Text>,
      headerRight: <Icon name="md-map" style = {{paddingRight: 10, transform:[{scaleX: 0.7},{scaleY:0.7}], color:'black'}} 
      /*onPress={() => navigation.navigate('Second')}*//>
      })
  },
  Second:{
    screen: MapTab
  }
})

class StackScreen extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    ); 
  }
}

export default StackScreen;