/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ToolbarAndroid
} from 'react-native'

const items = [
  { id: '1', text: "Buy some cat food", description: "The cats are hungry" },
  { id: '2', text: "Learn F#", description: "Seems like a functional idea" },
  { id: '3', text: "Learn to play guitar", description: "Noted" },
  { id: '4', text: "Buy some new candles", description: "Pine and cranberry for that winter feel" },
  { id: '5', text: "Complete holiday shopping", description: "Keep it a secret!" },
  { id: '6', text: "Finish a todo list", description: "Done" },
]
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Browse extends Component {
  render() {

    const listViewRow = (rowData) => {
      return (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>{rowData.text}</Text>
          <Text style={styles.listItemDescription}>{rowData.description}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={ds.cloneWithRows(items)}
          renderRow={listViewRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  list: {
    backgroundColor: 'green',
  },
  listItem: {
    height: 72,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  listItemText: {
    fontSize: 16,
  },
  listItemDescription: {
    fontSize: 14,
  },
  listItemDense: {
    height: 60,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  listItemTextDense: {
    fontSize: 13,
  },
  listItemDescriptionDense: {
    fontSize: 11,
  }

});