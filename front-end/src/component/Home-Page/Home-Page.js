import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import AppStateContext from '../../context/app-state-context';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import If from '../If/If';
import Login from '../Login/Login';
import NavigationContext from '../../context/navigation-context';
import styles from './styles';


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
      user: data.queryParams.user_name,
      display_name: data.queryParams.display_name,
      user_id: data.queryParams.id,
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
        display_name: 'Please Login',
        user_id: undefined,
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

          <KeyboardAvoidingView style = { styles.container } behavior = 'padding' enabled>
            <If condition = { !this.state.user }>
              <Login />
            </If>
            <If condition = { this.state.user }>
              <Dashboard />
            </If>
          </KeyboardAvoidingView>
        </NavigationContext.Provider>
        </AppStateContext.Provider>
      </>
    );
  }
}