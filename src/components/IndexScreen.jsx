import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { number, object } from 'prop-types'
import connector from './connector'

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

  handlePlus = () => {
    const { actions } = this.props
    actions.counter.plus()
  }

  handleMinus = () => {
    const { actions } = this.props
    actions.counter.minus()
  }

  render() {
    const { counter } = this.props

    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.welcome}>{counter}</Text>
          <View style={styles.flex}>
            <Button title="-" onPress={this.handleMinus} disabled={counter <= 0} />
            <Button title="+" onPress={this.handlePlus} />
          </View>
        </View>
      </View>
    )
  }
}

IndexScreen.propTypes = {
  actions: object.isRequired,
  counter: number.isRequired,
}

export default connector(IndexScreen)
