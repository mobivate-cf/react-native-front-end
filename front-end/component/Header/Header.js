import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import HamMenu from '../Ham-Menu/Ham-Menu';

const Header = (props) => {
  return(
  <View style={styles.headerView}>
    <HamMenu/>
    <Text style={styles.headerText}>
      Mobivate from Header
    </Text>
    <Button title="Logout" style={styles.headerButton}/>
  </View>
  );
}

export default Header;
