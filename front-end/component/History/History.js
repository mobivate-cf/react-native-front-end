import React from 'react';
import { View, Text } from 'react-native';

import Header from '../Header/Header';

export default class History extends React.Component{
  static navigationOptions = { title: 'History' };
  render(){
    return(
      <>
      <Header />
      <View>
        <Text>
          ALOHA
        </Text>
      </View>
      </>
    );
  }
}