/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
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

const getActions = (actionIndex) => {
  let actions = [];
  if (actionIndex === 0) {
    actions.push({ id: 'AddItem', title: 'Add Item', show: 'always' })
  }
  return actions;
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { initialPage: 0, currentPage: 0 };
  }

  actionSelected(action, navigation) {
    navigation.navigate(action.id)
  }

  pageSelected(event) {
    const positionIndex = event.nativeEvent.position;
    this.setState({ ...this.state, currentPage: positionIndex });
  }

  render() {
    const currentPage = this.state.currentPage;
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title='ReactNativeTest'
          titleColor='white'
          actions={getActions(currentPage)}
          onActionSelected={(actionIndex) => { this.actionSelected(getActions(currentPage)[actionIndex], this.props.navigation) }}
        />
        <TabAndroid style={styles.tabbar}
          tabTitles={['Browse', 'About']}>
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}
            onPageSelected={this.pageSelected.bind(this)}>
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
  return {};
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