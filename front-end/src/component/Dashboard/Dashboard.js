import React from 'react';
import { Text, View } from 'react-native';

import AppStateContext from '../../context/app-state-context';
import CreateGoalButton from '../Create-Goal/Create-Goal-Button';
import SimplifiedGoalView from '../Goal/simplified/goal';

export default class Dashboard extends React.Component {
  static contextType = AppStateContext;
  static navigationOptions = { title: 'Mobivate' };
  
  render() {
    return(
      <>
        <View>
          <Text>
            Welcome 1, { this.context.user }
          </Text>
        </View>
        <SimplifiedGoalView goalId={34} goalName={'Read'} />
        <CreateGoalButton />
      </>
    );
  }
}
