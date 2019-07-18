import React from 'react';
import { FlatList, View } from 'react-native';
import { CheckBox, ListItem, TouchableScale } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const FETCH_USER_GOALS_URL = 'https://mobby-backend.herokuapp.com/goals';

export default class Dashboard extends React.Component {
  static navigationOptions = { headerTitle: 'Today', headerLeft: null, gesturesEnabled: false };

  constructor(props) {
    super(props);
    this.state = {};
    this.userId = props.navigation.getParam('user_id');
    this.userName = props.navigation.getParam('user');
    this.displayName = props.navigation.getParam('display_name');

    this.state.userGoals = [
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
      },
    ];
  }

  getUserGoals() {
    return fetch(FETCH_USER_GOALS_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'goal_user_id': this.userId,
      },
      body: JSON.stringify({
        goal_user_id: 1149045194530017300,
      }),
    })
      .then((result) => {
        console.log(result.json());
        return result;
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <View>
          <View zIndex={-1}>
            <FlatList
              style={{ width: '100%', height: '100%' }}
              data={this.state.userGoals}
              // data={this.getUserGoals()}
              renderItem={({ item }) => (
                <ListItem
                  Component={TouchableScale}
                  title={item.name}
                  titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}
                  subtitleStyle={{ color: 'black' }}
                  subtitle={`Streak: ${item.streak}`}
                  rightTitle={<CheckBox checked={false} />}
                />
              )}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('CreateGoal');
              }}
            >
              <Icon
                name="plus-circle"
                size={75}
                color="orange"
                style={{
                  marginRight: 35,
                  marginBottom: 50,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
