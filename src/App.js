import React, { Component } from 'react'
import { Navigator, View } from 'react-native'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Navigation } from 'react-native-navigation'

import AppReducer from './reducers/AppReducer'

import HomePage from './pages/Home'
import AddItemPage from './pages/AddItem'
import ItemDetailPage from './pages/ItemDetail'
import BrowsePage from './pages/Browse'
import AboutPage from './pages/About'


const store = createStore(AppReducer)

/*class ReactNativeTest extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      </View>
    );
  }
}*/

//Navigation.registerComponent('ReactNativeTest', () => ReactNativeTest);
Navigation.registerComponent('Home', () => HomePage, store, Provider);
Navigation.registerComponent('AddItem', () => AddItemPage, store, Provider);
Navigation.registerComponent('ItemDetail', () => ItemDetailPage, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'ReactNativeTest',    
  }
});
