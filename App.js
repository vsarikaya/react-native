import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import Index from './app/index';

export default class App extends Component {

  constructor(props: any): any {
    super(props);
    this.state = configureStore();
  }

  render(): React$Element<any> {
    return (
      <Provider store={this.state}>
        <Index />
      </Provider>
    );
  }
}
