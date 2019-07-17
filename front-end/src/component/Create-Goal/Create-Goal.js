import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class CreateGoal extends React.Component {
  static navigationOptions = { headerTitle: 'Create New Goal', headerLeft: null };
  
  render() {
    return(
      <>
        <View>
          <Text>
            TODO: Add create goal form
          </Text>
        </View>
      </>
    );
  }
}