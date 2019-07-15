import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Header from './component/Header/Header';
import History from './component/History/History';
import HamMenu from './component/Ham-Menu/Ham-Menu';
import HomePage from './component/Home-Page/Home-Page';

const mainNavigator = createStackNavigator({
  Header:   { screen: Header },
  History:  { screen: History },
  HamMenu:  { screen: HamMenu },
  HomePage: { screen: HomePage },
}, {
  initialRouteName: 'HomePage',
});

const AppContainer = createAppContainer(mainNavigator);

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}
