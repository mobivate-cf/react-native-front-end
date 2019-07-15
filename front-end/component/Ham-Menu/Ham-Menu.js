import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Hamburger from 'react-native-hamburger';
import styles from './styles.js';
import If from '../If/If';

const HamMenu = (props) => {
  const [active, toggleActive] = useState(false);
  return(
    <View style={styles.hamburger}>
      <Hamburger active={active}  type="cross" onPress={() => toggleActive(!active)} />
      <If condition={active}>
        <Text onPress={() => {}} style={styles.navLinks}> History </Text>
        <Text onPress={() => {}} style={styles.navLinks}> Logout </Text>
      </If>
    </View>
  );
}

export default HamMenu;