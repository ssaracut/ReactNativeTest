import React, { Component } from 'react';
import { Navigator } from 'react-native'
import {
  StackNavigator,
} from 'react-navigation';

import HomePage from './pages/Home'
import AddItemPage from './pages/AddItem'

class ReactNativeTest extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

export default NavStack = StackNavigator({
  Home: {
    screen: HomePage,
  },
  AddItem: {
    screen: AddItemPage
  }
},
  {
    headerMode: 'none'
  })