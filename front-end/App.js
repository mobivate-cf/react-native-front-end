import React from 'react';
import { Text, KeyboardAvoidingView, Button, TextInput } from 'react-native';

import styles from './styles';
import If from './component/If/If';
import AppHeader from './component/App-header/App-header';
import Header from './component/Header/Header';

// import * as Font from 'expo-font';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.isLoggedIn = false;
    this.state.text = '';
  }

  // componentDidMount() {
  //   Font.loadAsync({
  //     'Montserrat': require('./assets/fonts/Montserrat.ttf'),
  //   });
  // }

  login = () => {
    if(!this.state.isLoggedIn) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  logout = () => {
    if(this.state.isLoggedIn) {
      this.setState({
        isLoggedIn: false,
        text: '',
      });
    }
  }

  render() {
    return (
      <>
      <Header />
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <If condition={!this.state.isLoggedIn}>
          <Button onPress={this.login} title='Login with Twitter' />
        </If>
        <If condition={this.state.isLoggedIn}>
          <Text >Logged In!</Text>
          <TextInput
            style={{height: 40, width: 90, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button onPress={this.logout} title='Logout'></Button>
          <Text>{this.state.text}</Text>
        </If>
      </KeyboardAvoidingView>
      </>
    );
  }

}