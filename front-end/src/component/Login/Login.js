import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import AppStateContext from '../../context/app-state-context';

const Login = (props) => {
  const appStateContext = useContext(AppStateContext);

  return (
    <>
      <Text>
        { appStateContext.user || '7' }
      </Text>
      <Button 
        onPress = { () => appStateContext.login() } 
        title   = 'Login with Twitter'
      />
    </>
  );
}

export default Login;
