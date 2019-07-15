import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import If from '../If/If';
import styles from './styles';
import { AppStateContext } from '../Home-Page/Home-Page';

const Login = (props) => {
  const appStateContext = useContext(AppStateContext);
  return(
    <>
      <If condition = { !appStateContext.isLoggedIn }>
        <Button 
          onPress = { () => appStateContext.login() } 
          title = 'Login with Twitter' 
        />
        <Text>{ appStateContext.text }</Text>
      </If>
      <If condition = { appStateContext.isLoggedIn }>
        <Text > Logged In!</Text>
        <Text>{ appStateContext.redirectData }</Text>
        <Text>{ appStateContext.text }</Text>
      </If>
    </>
  );
}

export default Login;
