import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import IndexScreen from 'components/IndexScreen'
import { Provider } from 'react-redux'
import headerStyle from 'styles/header'
import store from './store'

const AppNavigator = createSwitchNavigator({
  Index: {
    screen: IndexScreen,
  },
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: headerStyle(),
})

const AppContainer = createAppContainer(AppNavigator)

export default () =>
  <Provider store={store}>
    <AppContainer />
  </Provider>
