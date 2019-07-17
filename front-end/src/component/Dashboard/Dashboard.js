import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card, CheckBox, Divider, ListItem, LinearGradient, TouchableScale } from 'react-native-elements';

import AppStateContext from '../../context/app-state-context';
import CreateGoalButton from '../Create-Goal/Create-Goal-Button';
// import SimplifiedGoalView from '../Goal/simplified/goal';

export default class Dashboard extends React.Component {
  static contextType = AppStateContext;
  static navigationOptions = { headerLeft: null, gesturesEnabled: false };
  
  render() {
    return(
      <>
        <View>
          <Text>
            Welcome, { this.props.navigation.getParam('user') }
          </Text>
        </View>

        <View>
          <FlatList
            data = {
              [
                {
                  key: '1',
                  name: 'Read a book',
                  streak: 20,
                }, 
                {
                  key: '2',
                  name: 'Walk Kali',
                  streak: 30,
                },
                {
                  key: '3',
                  name: 'Tell Jag about Jagged Array',
                  streak: '♾',
                },
                {
                  key: '4',
                  name: 'Call Becky Rebecky',
                  streak: 30,
                },
                {
                  key: '5',
                  name: 'Put beans in fridge',
                  streak: 2,
                },
                {
                  key: '6',
                  name: 'Pray to papa',
                  streak: 30,
                },
                {
                  key: '7',
                  name: 'Work on interview prep course',
                  streak: 2,
                },
                {
                  key: '8',
                  name: 'Suggest book to someone',
                  streak: 30,
                },
                {
                  key: '9',
                  name: 'Call Ginger Ugly',
                  streak: 10,
                }
              ]
            }

            renderItem = { ({ item }) => <ListItem
              Component = { TouchableScale }
              title = { item.name }
              titleStyle = {{ color: 'black', fontWeight: 'bold', fontSize: 20 }}
              subtitleStyle = {{ color: 'black' }}
              subtitle = { `Streak: ${ item.streak }` }
              rightTitle = { <CheckBox checked = { false }/> }
            />
            }
          />
        </View>
        {/* <SimplifiedGoalView goalId = { 34 } goalName = { 'Read' } /> */}
        {/* <CreateGoalButton /> */}
      </>
    );
  }
}
