import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppStateContext from '../../context/app-state-context';
import If from '../If/If';
import NavigationContext from '../../context/navigation-context';
import styles from './styles';

const BACKEND_URL = `https://mobby-backend.herokuapp.com/login/twitter`;

/**
 * Initial Page of app, displays login view
 * @export
 * @class HomePage
 * @extends {React.Component}
 */
export default class HomePage extends React.Component {
  static navigationOptions = { header: null };

  /**
   *Creates an instance of HomePage.
   * @param {*} props
   * @memberof HomePage
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.state.user = false;
    // this.state.user = 'dummyUser'; // false initial
    // this.state.display_name = 'dummyDisplay';
    // this.state.user_id = '27';

    this.state.logout = this.logout;
    console.log(Linking.getInitialURL().then((url) => url));
  }

  /**
   * Checks if user data is defined (user logged in) and redirects user out of login screen
   * Runs when component is first loaded (added to tree)
   *
   * @memberof HomePage
   */
  componentDidMount() {
    if (this.state.user) {
      this.props.navigation.navigate('Dashboard', {
        user: this.state.user,
        display_name: this.state.display_name,
        user_id: this.state.user_id,
      });
    }
  }

  /**
   *  Handles universal/deep links to the app. Currently only supported for iOS since expo
   *  does not support android deep links.
   * @param {Object} event redirect event
   * @memberof HomePage
   */
  _handleRedirect = (event) => {
    // WebBrowser.dismissBrowser() is iOS only
    WebBrowser.dismissBrowser();
    const data = Linking.parse(event.url);

    this.setState({
      user: data.queryParams.user_name,
      display_name: data.queryParams.display_name,
      user_id: data.queryParams.id,
    });
    this.componentDidMount();
  };

  /**
   *
   *
   * @memberof HomePage
   */
  login = async () => {
    try {
      // Deep Links not supported on android by Expo
      Linking.addEventListener('url', this._handleRedirect);
      await WebBrowser.openBrowserAsync(BACKEND_URL);
      Linking.removeEventListener('url', this._handleRedirect);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  /**
   *
   *
   * @memberof HomePage
   */
  logout = () => {
    if (this.state.display_name) {
      this.setState({
        user: false,
        display_name: 'Please Login',
        user_id: undefined,
      });
    }
  };

  /**
   *
   *
   * @returns
   * @memberof HomePage
   */
  render() {
    return (
      <>
        {/* For now we are sharing state - this is too broad and should be unique to the user */}
        <AppStateContext.Provider value={this.state}>
          <NavigationContext.Provider value={this.props.navigation}>
            <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
              <If condition={!this.state.user}>
                <View style={styles.loginContainer}>
                  <View style={styles.centerHorizontally}>
                    <Image source={require('../../../assets/icon.png')} style={{ width: 200, height: 200 }} />
                    <Text style={styles.appName}>Mobivate</Text>
                  </View>

                  <TouchableOpacity style={styles.centerHorizontally} onPress={() => this.login()}>
                    <Image source={require('../../../assets/sign-in-with-twitter.png')} />
                  </TouchableOpacity>
                </View>
              </If>
            </KeyboardAvoidingView>
          </NavigationContext.Provider>
        </AppStateContext.Provider>
      </>
    );
  }
}
