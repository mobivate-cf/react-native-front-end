import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import AppStateContext from '../../context/app-state-context';

class Login extends React.Component {
  static contextType = AppStateContext;
  static navigationOptions = { header: null };

  render() {
    return (
      <>
        <Text>
          { this.context.user || '7' }
        </Text>
        <Button 
          onPress = { () => this.context.login() } 
          title   = 'Login with Twitter'
        />
      </>
    );
  }
}

export default Login;
