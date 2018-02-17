import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Container, Content, Icon} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import CardComponent from '../CardComponent'

export default class HomeTab extends React.Component {
  static navigationOptions={
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color:
        tintColor}} />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource="1" articleTitle='40 Of The Most Instagrammable Food Spots In LA' subTitle={"*Snap's 50 pictures in multiple angles*"}/>
          <CardComponent imageSource="2" articleTitle='23 Delicious Los Angeles Eats That Are Worth Every Penny' subTitle="Here's what to feast on for under $10. (Besides In 'n' Out)"/>
          <CardComponent imageSource="3" articleTitle='22 Places You Need To Eat In La According To People Who Live There' subTitle="Fuck hiking, let's EAT!"/>


        </Content>
      </Container>
    ); 
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
