import React, { Component } from 'react';
import { Navigator } from 'react-native'
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import AppReducer from './reducers/AppReducer'

import HomePage from './pages/Home'
import AddItemPage from './pages/AddItem'
import ItemDetail from './pages/ItemDetail'

const AppNavigator = StackNavigator({
  Home: { screen: HomePage },
  AddItem: { screen: AddItemPage },
  ItemDetail: { screen: ItemDetail },
}, { headerMode: 'none', initialRouteName: 'Home' })

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

const appReducer = combineReducers({
  nav: navReducer,
  app: AppReducer,
});

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const ConnectedAppWithNavigationState = connect(state => ({ nav: state.nav }))(AppWithNavigationState)

const store = createStore(appReducer)
export default class ReactNativeTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedAppWithNavigationState />
      </Provider>
    );
  }
}


