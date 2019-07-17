import React from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import styles from './styles';

const SimplifiedGoalView = (props) => {
  const goalId = props.goalId;

  const _handleCheck = () => {
    // make request to backend to update goal  
  };
  
  return (
    <View onPress = { () => {} } style = { styles.goalContainer }>
      <Text style = { styles.goalStreak }>{}
      
      </Text>
      <CheckBox
        center
        title = { props.goalName }
        iconRight
        // checkedIcon = 'dot-circle-o'
        // uncheckedIcon = 'circle-o'
        checked = { false }
        onPress = { () => _handleCheck() }
      />
    </View>
  );
};

export default SimplifiedGoalView;
