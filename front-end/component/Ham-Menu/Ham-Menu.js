import React, { useState } from 'react';
import { View } from 'react-native';
import Hamburger from 'react-native-hamburger';

const HamMenu = (props) => {
  const [active, toggleActive] = useState(false);
  return(
    <View>
      <Hamburger active={active} type="cross" onPress={() => toggleActive(!active)} />
    </View>
  );
}

export default HamMenu;