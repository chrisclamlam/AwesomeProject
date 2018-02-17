import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Container, Content, Icon} from 'native-base'

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
          <CardComponent imageSource="6" articleTitle="21 Vegan Places In Los Angeles That'll Make You Want Seconds" subTitle="No dairy? No problem."/>
          <CardComponent imageSource="3" articleTitle='22 Places You Need To Eat In La According To People Who Live There' subTitle="Fuck hiking, let's EAT!"/>
          <CardComponent imageSource="4" articleTitle='28 Droolworthy Junk Food Treats To Eat In L.A.' subTitle="Not everything in the city of angels involves kale."/>
          <CardComponent imageSource="5" articleTitle='13 Cafes That Make LA The New Mecca For Coffee' subTitle="Caffeine fest from Santa Monica to Silverlake"/>



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
