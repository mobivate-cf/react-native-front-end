import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CreateGoal from './src/component/Create-Goal/Create-Goal';
import Dashboard from './src/component/Dashboard/Dashboard';
import HomePage from './src/component/Home-Page/Home-Page';

const mainNavigator = createStackNavigator({
    CreateGoal: { screen: CreateGoal },
    Dashboard: { screen: Dashboard },
    HomePage: { screen: HomePage },
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
