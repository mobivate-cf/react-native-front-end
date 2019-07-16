import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Header from './src/component/Header/Header';
import History from './src/component/History/History';
import HamMenu from './src/component/Ham-Menu/Ham-Menu';
import HomePage from './src/component/Home-Page/Home-Page';
import Dashboard from './src/component/Dashboard/Dashboard';
import CreateGoal from './src/component/Create-Goal/Create-Goal';
import CreateGoalButton from './src/component/Create-Goal/Create-Goal-Button';

const mainNavigator = createStackNavigator({
  Header:   { screen: Header },
  History:  { screen: History },
  HomePage: { screen: HomePage },
  Dashboard: { screen: Dashboard },
  CreateGoal: { screen: CreateGoal },
  CreateGoalButton: { screen: CreateGoalButton },
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
