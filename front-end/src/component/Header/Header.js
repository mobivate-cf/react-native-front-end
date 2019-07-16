import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import HamMenu from '../Ham-Menu/Ham-Menu';

const Header = (props) => {
  return(
  <View   style = { styles.headerView }>
    <Text style = { styles.headerText }>Mobivate</Text>
    <HamMenu/>
  </View>
  );
}

export default Header;
