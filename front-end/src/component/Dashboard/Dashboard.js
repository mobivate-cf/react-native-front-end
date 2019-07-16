import React from 'react';
import { View, Text } from 'react-native';

import CreateGoalButton from '../Create-Goal/Create-Goal-Button';
import NavigationContext from '../../context/navigation-context';

export default class Dashboard extends React.Component {
  static navigationOptions = { title: 'Mobivate' };
  
  render() {
    return(
      <>
        <View>
          <Text>
            TODO: Add goal data here
          </Text>
        </View>
        <NavigationContext.Provider value = { this.props.navigation }>
          <CreateGoalButton />
        </NavigationContext.Provider>
      </>
    );
  }
}
