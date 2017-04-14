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
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native'


const listViewRow = (navigation, rowData) => {
  const rowTouched = (navigation, rowData) => {
    navigation.navigate('ItemDetail', rowData);
  }
  return (
    <TouchableHighlight onPress={(event) => rowTouched(navigation, rowData)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{rowData.text}</Text>
        <Text style={styles.listItemDescription}>{rowData.description}</Text>
      </View>
    </TouchableHighlight>
  )
}

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default Browse = (props) => {
  const { navigation, itemList } = props;
  return (
    <View style={styles.container}>
      <ListView
        dataSource={ds.cloneWithRows(itemList)}
        renderRow={(rowData) => listViewRow(navigation, rowData)}
      />
    </View>
  );
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