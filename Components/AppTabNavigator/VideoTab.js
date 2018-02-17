import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'native-base'



export default class VideoTab extends React.Component {
  static navigationOptions={
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-play" style={{color:
        tintColor}} />
    )
  }
  render() {
    return (
      <View style={styles.container}> 
      
      </View>
    ); 
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
