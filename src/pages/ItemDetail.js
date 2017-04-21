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
  View,
  ToolbarAndroid,
  ViewPagerAndroid,
  Text,
  TextInput
} from 'react-native'
import nativeImageSource from 'nativeImageSource';

import * as AppActionCreators from '../actions/AppActionCreators'

export class ItemDetailPage extends Component {

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    const navigation = this.props.navigator;
    const { text, description } = this.props.rowData;

    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title={text}
          titleColor='white'
          navIcon={{ uri: 'ic_back_button' }}
          onIconClicked={navigation.pop}
        />
        <View style={styles.form}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    height: 56,
    //elevation: 10,
    backgroundColor: '#2196F3',
  },
  form: {
    padding: 15
  },
  text: {
    fontSize: 18
  },
  description: {
    fontSize: 16
  }
});