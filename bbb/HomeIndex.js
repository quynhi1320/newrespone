import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Home from "./Component/Home.js";
import Order from "./Component/Order.js";
export default class HomeIndex extends react.Component {
  render() {
    return (<Text>jhdfjfhgjasHdf</Text>
      ,
      <Order />);
  }
}
AppRegistry.registerComponent('HomeIndex', () => Home);
