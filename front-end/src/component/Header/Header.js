import React from 'react';
import { Text, View } from 'react-native';

import HamMenu from '../Ham-Menu/Ham-Menu';
import styles from './styles';

const Header = (props) => {
  return(
  <View style = { styles.headerView }>
    <Text style = { styles.headerText }>Mobivate</Text>
    <HamMenu/>
  </View>
  );
}

export default Header;
