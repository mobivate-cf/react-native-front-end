import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CreateGoal from './src/component/Create-Goal/Create-Goal';
import Dashboard from './src/component/Dashboard/Dashboard';
import Header from './src/component/Header/Header';
import History from './src/component/History/History';
import HomePage from './src/component/Home-Page/Home-Page';

const mainNavigator = createStackNavigator({
    Header:   { screen: Header },
    History:  { screen: History },
    HomePage: { screen: HomePage },
    Dashboard: { screen: Dashboard },
    CreateGoal: { screen: CreateGoal },
  }, {
    initialRouteName: 'HomePage',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTitle: 'Mobivate',
    },
  });

const AppContainer = createAppContainer(mainNavigator);

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}
