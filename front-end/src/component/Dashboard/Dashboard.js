import React from 'react';
import { Text, View } from 'react-native';

import AppStateContext from '../../context/app-state-context';
import CreateGoalButton from '../Create-Goal/Create-Goal-Button';
import NavigationContext from '../../context/navigation-context';

export default class Dashboard extends React.Component {
  static contextType = AppStateContext;
  static navigationOptions = { title: 'Mobivate' };
  
  render() {
    return(
      <>
        <View>
          <Text>
            Welcome, { this.context.user }
            {/* Welcome, dumby! */}
          </Text>
        </View>
        <CreateGoalButton />
      </>
    );
  }
}
