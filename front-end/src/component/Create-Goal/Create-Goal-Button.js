import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import React, { useContext } from 'react';

import styles from './styles';
import NavigationContext from '../../context/navigation-context';

const CreateGoalButton = (props) => {
  const navigationContext = useContext(NavigationContext);
  console.log(NavigationContext);
  return (
    <View style = { styles.buttonContainer }>
      <Text 
        onPress = { () => navigationContext.navigate('CreateGoal') } 
        style = { styles.button }>
        <Icon name="plus-circle" size={75} color="#900" />
      </Text>
    </View>
  );
};

export default CreateGoalButton;
