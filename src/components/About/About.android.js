/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default About = (props) => {
  const press = () => { }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
        </Text>
      <Text style={styles.instructions}>
        To get started, edit index.android.js
        </Text>
      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
        </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
          onPress={press}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    margin: 20,
  }
});