import React from 'react';
import { FlatList, View } from 'react-native';
import { CheckBox, ListItem, TouchableScale } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const FETCH_USER_GOALS_URL = 'https://mobby-backend.herokuapp.com/goals';

/**
 * React Component for Homepage of app
 *
 * Displays user goals, add goal button.
 *
 * @export
 * @class Dashboard
 * @extends {React.Component}
 */
export default class Dashboard extends React.Component {
  static navigationOptions = { headerTitle: 'Today', headerLeft: null, gesturesEnabled: false };

  /**
   * Creates an instance of Dashboard.
   *
   * Sets user data from data passed by react navigation and default "goals"
   *
   * @param {*} props
   * @memberof Dashboard
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.userId = props.navigation.getParam('user_id');
    this.userName = props.navigation.getParam('user');
    this.displayName = props.navigation.getParam('display_name');

    this.state.userGoals = [
      {
        key: 'add',
        goal_name: 'loading...',
        streak: 0,
      },
    ];
  }

  /**
   *  Gets run when the component is loaded in
   *
   * @memberof Dashboard
   */
  componentDidMount() {
    this.getUserGoals();
  }

  /**
   *  Gets user's goals from backend.
   *
   *  If backend has no goals for user, sets a 'add goal' goal
   *
   * @returns {Array} array of objects, each being a goal
   * @memberof Dashboard
   */
  async getUserGoals() {
    let goals = await fetch(FETCH_USER_GOALS_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goal_user_id: 1149045194530017300,
      }),
    });

    goals = await goals.json();

    goals.map((element, idx) => {
      element.key = `${element.goal_id}`;
      element.completed = false;
      this.state.userGoals[idx] = element;
      return element;
    });
    this.forceUpdate();
  }

  /**
   * Updates checked status of goal
   *
   * @param {Object} goal
   * @memberof Dashboard
   */
  handleChecked(goal) {
    goal.completed = !goal.completed;
    this.forceUpdate();
  }

  /**
   *  Renders screen for dashboard, list of user goals and add button
   *
   * @returns React Component
   * @memberof Dashboard
   */
  render() {
    return (
      <>
        <View style={{ width: '90%', height: '100%', marginLeft: '7%' }}>
          <View zIndex={-1}>
            <FlatList
              style={{ width: '100%', height: '100%' }}
              data={this.state.userGoals}
              renderItem={({ item }) => (
                <ListItem
                  Component={TouchableScale}
                  title={item.goal_name}
                  titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}
                  subtitleStyle={{ color: 'black' }}
                  subtitle={item.streak ? `Streak: ${item.streak}` : 'give it a sec'}
                  rightTitle={<CheckBox checked={item.completed} onPress={() => this.handleChecked(item)} />}
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
                  marginRight: 15,
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
