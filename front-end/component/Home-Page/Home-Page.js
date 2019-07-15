import React from 'react';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { Text, KeyboardAvoidingView, Button, TextInput } from 'react-native';

import styles from './styles';
import If from '../If/If';
import Header from '../Header/Header';

export const NavigationContext = React.createContext();

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.isLoggedIn = false;
    this.state.text = 'adsd';
    this.state.redirectData = '';
  }

  _handleRedirect = (event) => {
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    this.setState({
      redirectData: data.queryParams.authToken,
    });
  };

  login = async () => {
    try {
      this.setState({
        text: Linking.makeUrl()
      });
      Linking.addEventListener('url', this._handleRedirect);

      let result = await WebBrowser.openBrowserAsync(`https://mobby-backend.herokuapp.com/login/twitter`);

      Linking.removeEventListener('url', this._handleRedirect);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  logout = () => {
    if (this.state.isLoggedIn) {
      this.setState({
        isLoggedIn: false,
        text: '',
      });
    }
  };

  render() {
    return (
      <>
      <NavigationContext.Provider value = { this.props.navigation }>
        <Header />
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <If condition={!this.state.isLoggedIn}>
            <Button onPress={this.login} title='Login with Twitter' />
            <Text>{this.state.text}</Text>
            <Text 
            onPress = { () => this.props.navigation.navigate('History') } 
            style   = { styles.navLinks }> 
            History 
          </Text>
          </If>
          <If condition={this.state.isLoggedIn}>
            <Text >Logged In!</Text>
            <Text>{this.state.redirectData}</Text>
            <TextInput
              style={{height: 40, width: 90, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <Button onPress={this.logout} title='Logout'></Button>
            <Text>{this.state.text}</Text>
          </If>
        </KeyboardAvoidingView>
      </NavigationContext.Provider>
      </>
    );
  }

}
