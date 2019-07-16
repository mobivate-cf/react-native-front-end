import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import If from '../If/If';
import Dashboard from '../Dashboard/Dashboard';
import AppStateContext from '../../context/app-state-context';

const Login = (props) => {
  const appStateContext = useContext(AppStateContext);

  if (appStateContext.user) {
    return (
      <>
        <Text>Welcome, { appStateContext.user.display_name }!</Text>
        <Dashboard />
      </>
    );
  }

  return (
    <>
      <Button 
        onPress = { () => appStateContext.login() } 
        title   = 'Login with Twitter'
      />
    </>
  );
}

export default Login;
