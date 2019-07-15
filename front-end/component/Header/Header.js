import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const Header = (props) => {
  return(
  <View style={styles.headerView}>
    <Text style={styles.headerText}>
      "Mobivate from Header"
    </Text>
    <Button title="Logout" style={styles.headerButton}/>
  </View>
  );
}

export default Header;
