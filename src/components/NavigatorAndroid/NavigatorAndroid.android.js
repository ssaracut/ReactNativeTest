'use strict';

import React, { PropTypes } from 'react';
import { NativeModules, requireNativeComponent, View, Text, UIManager, findNodeHandle } from 'react-native';
import createFragment from 'react-addons-create-fragment';
import HomePage from '../../pages/Home'

const Navigator = NativeModules.NavigatorAndroidModule;

class AndroidNavigator extends React.Component {

  static propTypes = {
    ...View.propTypes, // include the default view properties
    initalRoute: PropTypes.string,
    routes: PropTypes.object
  }

  constructor(props) {
    super(props);
    const routeKeys = Object.keys(this.props.routes);
    const initialScreen = this.props.routes[routeKeys[0]].screen;
    this.state = {
      navStack: [initialScreen]
    }
    this.navigate = this.navigate.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const routeKeys = Object.keys(this.props.routes);
    const initialScreen = this.props.routes[routeKeys[0]].screen;
    this.setState({ ...this.state, navStack: [initialScreen] })
  }

  navigate(screen, data) {
    this.setState({ ...this.state, navStack: [...this.state.navStack, this.props.routes[screen].screen] });
    //Navigator.navigate(this.fragmentContainerId);
    // const navigatorAndroidId = findNodeHandle(this.refs['refNavigatorAndroid']);
    // UIManager.dispatchViewManagerCommand(
    //   navigatorAndroidId,
    //   UIManager["NavigatorAndroid"].Commands["navigate"],
    //   ["some prop 1", "some prop 2"]
    // );
  }

  render() {
    const ScreenToRender = this.state.navStack[this.state.navStack.length - 1];
    //const ScreenToRender = HomePage;
    return (
      <View style={{ flex: 1 }}>
        <NavigatorAndroid style={{ flex: 1 }}>
          <ScreenToRender navigation={{ navigate: this.navigate, goBack: this.goBack }} />
        </NavigatorAndroid>
      </View >
    )
  }

}

var NavigatorAndroid = requireNativeComponent('NavigatorAndroid', AndroidNavigator, {
  nativeOnly: {
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true,
  }
});

module.exports = AndroidNavigator;