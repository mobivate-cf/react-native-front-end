import { View, Text } from 'react-native';
import Hamburger from 'react-native-hamburger';
import React, { useState, useContext } from 'react';

import If from '../If/If';
import styles from './styles';
import { AppStateContext } from '../Home-Page/Home-Page';
import { NavigationContext } from '../Home-Page/Home-Page';

const HamMenu = (props) => {
  const navigationContext = useContext(NavigationContext);
  const appStateContext = useContext(AppStateContext);
  const [active, toggleActive] = useState(false);

  const _handleLogout = (event) => {
    event.preventDefault();
    appStateContext.logout();
    toggleActive(false);
  }
  
  return(
    <View style = { styles.hamburger }>
      <Hamburger 
        active  = { active }  
        type    = "cross" 
        onPress = { () => toggleActive(!active) } 
      />
      <If condition = { active }>
        <Text 
          onPress = { () => navigationContext.navigate('History') } 
          style   = { styles.navLinks }> 
          History 
        </Text>
        <Text 
          onPress = { (event) => _handleLogout(event) } 
          style   = { styles.navLinks }> 
          Logout 
        </Text>
      </If>
    </View>
  );
}

export default HamMenu;