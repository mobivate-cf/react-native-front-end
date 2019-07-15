import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Hamburger from 'react-native-hamburger';

import If from '../If/If';
import styles from './styles.js';
import { NavigationContext } from '../Home-Page/Home-Page';

const HamMenu = (props) => {
  const context = useContext(NavigationContext);
  const [active, toggleActive] = useState(false);
  return(
    <View style = { styles.hamburger }>
      <Hamburger 
        active  = { active }  
        type    = "cross" 
        onPress = { () => toggleActive(!active) } 
      />
      <If condition = { active }>
        <Text 
          onPress = { () => context.navigate('History') } 
          style   = { styles.navLinks }> 
          History 
        </Text>
        <Text 
          onPress = { () => {} } 
          style   = { styles.navLinks }> 
          Logout 
        </Text>
      </If>
    </View>
  );
}

export default HamMenu;