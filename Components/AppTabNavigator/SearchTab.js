import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'native-base'
import GridView from 'react-native-super-grid';

export default class SearchTab extends React.Component {
  static navigationOptions={
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-search" style={{color:
        tintColor}} />
    )
  }
  render() {
    const items = [
      { name: 'FEAST', code: 'md-search' }, { name: 'LIGHT', code: 'md-search' },
      { name: 'DIABETIES', code: 'md-search' }, { name: 'HEALTHY', code: 'md-search' },
      { name: 'ADVENTURE', code: 'md-search' }, { name: 'BELIZE HOLE', code: 'md-search'},
      { name: 'ADVENTURE', code: 'md-search' }, { name: 'MIDNIGHT BLUE', code: 'md-search' },
    ];

    return (
      <View style={styles.container}> 
        <Text> SEARCH BY MOOD</Text>
        <GridView
        itemDimension={70}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Icon name={item.code} style={{justifyContent: 'center', alignItems: 'center', }} />
          </View>
        )}
      />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 70,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
