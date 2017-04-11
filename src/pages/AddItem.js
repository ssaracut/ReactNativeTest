/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ToolbarAndroid,
  ViewPagerAndroid,
  Text,
  TextInput
} from 'react-native'
import nativeImageSource from 'nativeImageSource';

export default class AddItemPage extends Component {
  actionSelected(actionIndex) {

  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title='ReactNativeTest'
          titleColor='white'
          navIcon={{ uri: 'ic_back_button' }}
          onIconClicked={this.props.navigation.goBack}
          actions={[
            { title: 'Save', show: 'always' }
          ]}
          onActionSelected={this.actionSelected}
        />
        <View style={styles.form}>
          <Text style={styles.label}>Text</Text>
          <TextInput placeholder='Item name' />
          <Text style={styles.label}>Description</Text>
          <TextInput placeholder='This is a nice description' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    height: 56,
    elevation: 10,
    backgroundColor: '#2196F3',
  },
  form: {
    padding: 15
  },
  label: {
    fontSize: 21
  }
});