/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native'
import * as AppActionCreators from '../actions/AppActionCreators'
import { Navigation } from 'react-native-navigation'

const listViewRow = (navigator, rowData) => {
  const rowTouched = (navigator, rowData) => {
    //navigation.navigate('ItemDetail', rowData);
    navigator.push({ screen: 'ItemDetail', passProps: { rowData } })
  }
  return (
    <TouchableHighlight onPress={(event) => rowTouched(navigator, rowData)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{rowData.text}</Text>
        <Text style={styles.listItemDescription}>{rowData.description}</Text>
      </View>
    </TouchableHighlight>
  )
}

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Browse extends Component {
  render() {
    const { navigator, itemList } = this.props;
    return (
      <View style={styles.container}>
        <ListView
          dataSource={ds.cloneWithRows(itemList)}
          renderRow={(rowData) => listViewRow(navigator, rowData)}
        />
      </View>
    );
  }
}

const mapStateToProps = function (state) {
  return state;
};
const mapDispatchToProps = function (dispatch) {
  return {
    appActions: bindActionCreators(AppActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);

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
    borderColor: '#dbdbdb',
    borderBottomWidth: 1
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