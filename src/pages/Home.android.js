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
  Button
} from 'react-native'

import * as AppActionCreators from '../actions/AppActionCreators'
import Browse from '../components/Browse/Browse'
import About from '../components/About/About'
import TabAndroid from '../components/TabAndroid/TabAndroid'

const tabTitles = ['Browse', 'About'];
const headerActions = [[{ id: 'AddItem', title: 'Add Item', show: 'always' }], []];

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { currentTabIndex: 0 }
    this.actionSelected = this.actionSelected.bind(this);
    this.pageSelected = this.pageSelected.bind(this);
  }

  actionSelected(actionIndex) {
    const navigation = this.props.navigation;
    const currentTabIndex = this.state.currentTabIndex;
    const action = headerActions[currentTabIndex][actionIndex];
    navigation.navigate(action.id)
  }

  pageSelected(event) {
    const positionIndex = event.nativeEvent.position;
    this.setState({ ...this.state, currentTabIndex: positionIndex })
  }

  render() {
    const navigation = this.props.navigation;
    const currentTabIndex = this.state.currentTabIndex;
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title={tabTitles[currentTabIndex]}
          titleColor='white'
          actions={headerActions[currentTabIndex]}
          onActionSelected={this.actionSelected}
        />
        <TabAndroid style={styles.tabbar}
          tabTitles={tabTitles}>
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}
            onPageSelected={this.pageSelected}>
            <View style={styles.pageStyle}>
              <Browse itemList={this.props.itemList} />
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

const mapStateToProps = function (state) {
  return state.app;
};
const mapDispatchToProps = function (dispatch) {
  return {
    appActions: bindActionCreators(AppActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    height: 56,
    //elevation: 10,
    backgroundColor: '#2196F3',
  },
  tabbar: {
    height: 56,
    //elevation: 10,
    //backgroundColor: '#228B22',
  },
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    flex: 1,
  }
});