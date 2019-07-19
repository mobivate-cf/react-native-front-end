import React from 'react';
import { TextInput, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

const FETCH_CREATE_GOAL_URL = 'https://mobby-backend.herokuapp.com/createGoal';

/**
 *  React Component for add goal screen
 *
 * @export
 * @class CreateGoal
 * @extends {React.Component}
 */
export default class CreateGoal extends React.Component {
  static navigationOptions = { headerTitle: 'Create New Goal', headerLeft: null };

  /**
   *  Creates an instance of CreateGoal.
   *
   * @param {*} props
   * @memberof CreateGoal
   */
  constructor(props) {
    super(props);
    this.userId = props.navigation.getParam('user_id');

    this.state = {};
    this.state.isStartDateTimePickerVisible = false;
    this.state.isEndDateTimePickerVisible = false;
    this.state.startDate = Date.now();
    this.state.endDate = Date.now() * 2;
    this.state.goal_name;
  }

  /**
   *  Shows date picker for start date of goal
   *
   * @memberof CreateGoal
   */
  showStartDateTimePicker = () => {
    this.setState({ isStartDateTimePickerVisible: true });
  };

  /**
   *  Shows date picker for end date of goal
   *
   * @memberof CreateGoal
   */
  showEndDateTimePicker = () => {
    this.setState({ isEndDateTimePickerVisible: true });
  };

  /**
   *  Hides date picker for start date of goal
   *
   * @memberof CreateGoal
   */
  hideStartDateTimePicker = () => {
    this.setState({ isStartDateTimePickerVisible: false });
  };

  /**
   *  Hides date picker for end date of goal
   *
   * @memberof CreateGoal
   */
  hideEndDateTimePicker = () => {
    this.setState({ isEndDateTimePickerVisible: false });
  };

  /**
   *  Sets date for start date of goal
   *
   * @memberof CreateGoal
   */
  handleStartDatePicked = (date) => {
    this.hideStartDateTimePicker();
  };

  /**
   *  Sets date for end date of goal
   *
   * @memberof CreateGoal
   */
  handleEndDatePicked = (date) => {
    this.hideEndDateTimePicker();
  };

  makeGoal = async () => {
    let createdGoal = await fetch(FETCH_CREATE_GOAL_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goal_user_id: this.userId,
        goal_name: this.state.goal_name,
        goal_start_date: this.state.startDate,
        goal_end_date: this.state.endDate,
        frequency: 'daily',
      }),
    });

    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <>
        <View
          style={{
            width: '90%',
            height: '80%',
            marginLeft: '5%',
            marginTop: '40%',
          }}
        >
          <TextInput
            label="Name"
            onChangeText={(name) => this.setState({ goal_name: name })}
            placeholder="Give your goal a name"
          />
          {/* <Input style={{ marginTop: '10%' }} label="Add Friends" placeholder="Add your twitter friends to the goal" /> */}

          <Button
            title="Start Date"
            onPress={this.showStartDateTimePicker}
            style={{ width: '90%', marginLeft: '5%', marginTop: '5%' }}
          />
          <DateTimePicker
            isVisible={this.state.isStartDateTimePickerVisible}
            onConfirm={this.handleStartDatePicked}
            onCancel={this.hideStartDateTimePicker}
          />

          <Button
            title="End Date (Optional)"
            onPress={this.showEndDateTimePicker}
            style={{ width: '90%', marginLeft: '5%', marginTop: '5%' }}
          />
          <DateTimePicker
            isVisible={this.state.isEndDateTimePickerVisible}
            onConfirm={this.handleEndDatePicked}
            onCancel={this.hideEndDateTimePicker}
          />

          <Button title="Submit" style={{ marginTop: '40%' }} onPress={this.makeGoal} />
        </View>
      </>
    );
  }
}
