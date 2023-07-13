import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import MainNavigator from './Main/MainNavigator';
export default function App() {
  return (
    <Provider store={store}>
        <MainNavigator/>
    </Provider>
  );
}
