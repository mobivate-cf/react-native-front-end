import React from 'react';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { KeyboardAvoidingView } from 'react-native';

import Login from '../Login/Login';
import styles from './styles';
import Header from '../Header/Header';

export const NavigationContext = React.createContext();
export const AppStateContext = React.createContext();

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.isLoggedIn = false;
    this.state.text = 'adsd';
    this.state.redirectData = '';
    this.state.logout = this.logout;
    this.state.login = this.login;
  }

  _handleRedirect = (event) => {
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    this.setState({
      redirectData: data.queryParams.authToken,
    });
  };

  // login = async () => {
  //   try {
  //     this.setState({
  //       text: Linking.makeUrl()
  //     });
  //     Linking.addEventListener('url', this._handleRedirect);

  //     let result = await WebBrowser.openBrowserAsync(`https://mobby-backend.herokuapp.com/login/twitter`);

  //     Linking.removeEventListener('url', this._handleRedirect);
  //   } catch (error) {
  //     alert(error);
  //     console.error(error);
  //   }
  // };
  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  logout = () => {
    if (this.state.isLoggedIn) {
      this.setState({
        isLoggedIn: false,
        redirectData: '',
        text: '',
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
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <Login />
        </KeyboardAvoidingView>
      </NavigationContext.Provider>
      </AppStateContext.Provider>
      </>
    );
  }

}
