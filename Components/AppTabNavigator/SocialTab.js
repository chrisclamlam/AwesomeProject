import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'native-base'

export default class SocialTab extends React.Component {
  static navigationOptions={
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-flame" style={{color:
        tintColor}} />
    )
  }
  render() {
    return (
      <View style={styles.container}> 
        <Text> SOCIAL ASPECT PULL UP VIDEO INFLUENCER PLACES </Text>
      </View>
    ); 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
