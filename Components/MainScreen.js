import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'native-base'
import {TabNavigator} from 'react-navigation'

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import VideoTab from './AppTabNavigator/VideoTab'
import SocialTab from './AppTabNavigator/SocialTab'
import ProfileTab from './AppTabNavigator/ProfileTab'


const Map = StackNavigator({
  Profile: { screen: ProfileTab },
});

const AppTabNavigator = TabNavigator({
  HomeTab:{
    screen: HomeTab
  },
  SearchTab:{
    screen: SearchTab
  },
  VideoTab:{
    screen: VideoTab
  }, 
  SocialTab:{
    screen: SocialTab
  },
  ProfileTab:{
    screen: ProfileTab
  },
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel:true,
    showIcon:true
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class MainScreen extends React.Component {
  
  static navigationOptions = {
    headerLeft : <Icon name="ios-camera-outline" style = {{paddingLeft: 10}} />,
    title: <Text style={{color:'red', fontWeight:0.56}}> BuzzFeed </Text>,
    headerRight: <Icon name="md-map" style = {{paddingRight: 10, transform:[{scaleX: 0.7},{scaleY:0.7}], color:'black'}} 
      onPress={() => this.props.navigate('ProfileTab')}/>}
  
  render() {

    return (
      <AppTabNavigator />
      
    ); 
  }
}

export default MainScreen;
