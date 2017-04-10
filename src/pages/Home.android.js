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
  Button
} from 'react-native'

import Browse from '../components/Browse/Browse'
import About from '../components/About/About'
import TabAndroid from '../components/TabAndroid/TabAndroid'

export default class HomePage extends Component {

  static navigationOptions = {
    header: ({ state }) => ({
      style: styles.toolbar,
      titleStyle: { color: 'white' },
      title: 'ReactNativeTest',
      right: (<Button title="Add Item" onPress={() => { debugger }} />)
    })
  }

  actionSelected(actionIndex) {
    const { navigate } = this.props.navigation;
    navigate('AddItem')
  }

  render() {

    /*<ToolbarAndroid
      style={styles.toolbar}
      title='ReactNativeTest'
      titleColor='white'
      actions={[
        { title: 'Add Item', show: 'always' }
      ]}
      onActionSelected={this.actionSelected.bind(this)}
    />*/

    return (
      <View style={styles.container}>
        <TabAndroid style={styles.tabbar}
          tabTitles={['Browse', 'About']}>
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
            <View style={styles.pageStyle}>
              <Browse />
            </View>
            <View style={styles.pageStyle}>
              <About />
            </View>
          </ViewPagerAndroid>
        </TabAndroid>
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
  tabbar: {
    height: 56,
    elevation: 10,
    //backgroundColor: '#228B22',
  },
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    flex: 1,
  }
});