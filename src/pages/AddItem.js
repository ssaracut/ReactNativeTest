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

const headerTitle = 'Add Item';
const headerActions = [{ id: 'SaveItem', title: 'Save', show: 'always' }];

export class AddItemPage extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = { text: '', description: '' };
    this.textChange = this.textChange.bind(this);
  }

  actionSelected(actionIndex, navigation, appActions) {
    appActions.saveListItem(this.state.text, this.state.description);
    navigation.pop();
  }

  textChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const navigation = this.props.navigator;
    const appActions = this.props.appActions;
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title={headerTitle}
          titleColor='white'
          navIcon={{ uri: 'ic_back_button' }}
          onIconClicked={navigation.pop}
          actions={headerActions}
          onActionSelected={(actionIndex) => this.actionSelected(actionIndex, navigation, appActions)}
        />
        <View style={styles.form}>
          <Text style={styles.label}>Text</Text>
          <TextInput name="text"
            placeholder='Item name'
            value={this.state.text}
            onChangeText={(text) => this.textChange('text', text)} />
          <Text style={styles.label}>Description</Text>
          <TextInput name="description"
            placeholder='This is a nice description'
            value={this.state.description}
            onChangeText={(text) => this.textChange('description', text)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);

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
  label: {
    fontSize: 21
  }
});