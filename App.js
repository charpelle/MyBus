import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
console.disableYellowBox = true;
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Navigator from './src/navigator/TabNavigator';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
