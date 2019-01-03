import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { object } from 'prop-types'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F3F5',
  },
  container: {},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

class IndexScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
      </View>
    )
  }
}

IndexScreen.propTypes = {}

export default IndexScreen
