import React from 'react';
import { Keyboard, View, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

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
    this.state = {};
    this.state.isStartDateTimePickerVisible = false;
    this.state.isEndDateTimePickerVisible = false;
  }

  /**
   *  Shows date picker for start date of goal
   *
   * @memberof CreateGoal
   */
  showStartDateTimePicker = () => {
    // alert('hello');
    this.setState({ isStartDateTimePickerVisible: true });
  };

  /**
   *  Shows date picker for end date of goal
   *
   * @memberof CreateGoal
   */
  showEndDateTimePicker = () => {
    // alert('hello');
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

  render() {
    return (
      <>
        <View>
          <Input label="Name" placeholder="Give your goal a name" />
          <Input label="Add Friends" placeholder="Add your twitter friends to the goal" />

          <Button title="Start Date" onPress={this.showStartDateTimePicker} style={{ width: '60%' }} />
          <DateTimePicker
            isVisible={this.state.isStartDateTimePickerVisible}
            onConfirm={this.handleStartDatePicked}
            onCancel={this.hideStartDateTimePicker}
          />

          <Button title="End Date (Optional)" onPress={this.showEndDateTimePicker} style={{ width: '60%' }} />
          <DateTimePicker
            isVisible={this.state.isEndDateTimePickerVisible}
            onConfirm={this.handleEndDatePicked}
            onCancel={this.hideEndDateTimePicker}
          />

          {/* <TextInput placeholder="End Date" onChange={(event) => this.setState({ goal_end: event.text })} />

          <TextInput placeholder="Frequency" onChange={(event) => this.setState({ goal_frequency: event.text })} /> */}
        </View>
      </>
    );
  }
}
