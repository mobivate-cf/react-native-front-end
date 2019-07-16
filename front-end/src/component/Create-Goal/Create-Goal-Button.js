import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationContext from '../../context/navigation-context';
import styles from './styles';

const CreateGoalButton = (props) => {
  const navigationContext = useContext(NavigationContext);

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
