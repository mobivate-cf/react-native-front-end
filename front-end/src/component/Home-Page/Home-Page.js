import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Image } from 'react-native-elements';

import AppStateContext from '../../context/app-state-context';
import Dashboard from '../Dashboard/Dashboard';
import If from '../If/If';
import NavigationContext from '../../context/navigation-context';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class HomePage extends React.Component {
  static navigationOptions = { header: null };

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
            <KeyboardAvoidingView style = { styles.keyboardContainer } behavior = 'padding' enabled>
              <If condition = { !this.state.user }>
                <View style = { styles.loginContainer } >
                  <View style = {styles.logoAndName}>
                    <Image source = { require('../../../assets/icon.png') }/>
                    <Text style = { styles.appName } >Mobivate</Text>
                  </View>
                  
                  <TouchableOpacity onPress = { () => this.login() }>
                    <Image source = { require('../../../assets/sign-in-with-twitter.png') }/>
                  </TouchableOpacity>
                </View>
              </If>
              
              { this.state.user ? this.props.navigation.navigate('Dashboard', {
                  user: this.state.user,
                  display_name: this.state.display_name,
                  user_id: this.state.user_id,
                }) : undefined }

              {/* <If condition = { this.state.user }>

                { this.props.navigation.navigate('Dashboard', {
                  user: this.state.user,
                  display_name: this.state.display_name,
                  user_id: this.state.user_id,
                }) }

              </If> */}
            </KeyboardAvoidingView>
          </NavigationContext.Provider>
        </AppStateContext.Provider>
      </>
    );
  }
}