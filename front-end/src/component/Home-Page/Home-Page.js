import React from 'react';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { KeyboardAvoidingView } from 'react-native';

import If from '../If/If';
import styles from './styles';
import Login from '../Login/Login';
import Header from '../Header/Header';
import AppStateContext from '../../context/app-state-context';
import NavigationContext from '../../context/navigation-context';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.user = false;
    this.state.logout = this.logout;
    this.state.login = this.login;
  }

  _handleRedirect = (event) => {
    WebBrowser.dismissBrowser();
    const data = Linking.parse(event.url);
    this.setState({ 
      user: {
        display_name: data.queryParams.display_name,
        user_name: data.queryParams.user_name,
        user_id: data.queryParams.id,
      }
    });
  };

  login = async () => {
    try {
      Linking.addEventListener('url', this._handleRedirect);

      await WebBrowser.openBrowserAsync(`https://mobby-backend.herokuapp.com/login/twitter`);

      Linking.removeEventListener('url', this._handleRedirect);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  logout = () => {
    if (this.state.display_name) {
      this.setState({
        user: false,
      });
    }
  };

  render() {
    return (
      <>
      {/* For now we are sharing state - this is too broad and should be unique to the user */}
      <AppStateContext.Provider value = { this.state }>
        <NavigationContext.Provider value = { this.props.navigation }>
            <Header />
        </NavigationContext.Provider>

        <KeyboardAvoidingView style = { styles.container } behavior = 'padding' enabled>
          <If condition = {!this.state.user}>
            <Login />
          </If>
        </KeyboardAvoidingView>
      </AppStateContext.Provider>
      </>
    );
  }

}
