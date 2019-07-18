import React from 'react';
import { Button, Keyboard, View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-elements';
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
   *  Hides date picker for end date of goal
   *
   * @memberof CreateGoal
   */
  hideStartDateTimePicker = () => {
    this.setState({ isStartDateTimePickerVisible: false });
  };

  /**
   *  Sets date for start date of goal
   *
   * @memberof CreateGoal
   */
  handleStartDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.hideStartDateTimePicker();
  };

  render() {
    return (
      <>
        <View>
          <TextInput
            placeholder="Name"
            onChange={(event) => this.setState({ goal_name: event.text })}
            maxLength={30}
            onBlur={Keyboard.dismiss}
          />
          <Button title="Show DatePicker" onPress={this.showStartDateTimePicker} />
          <DateTimePicker
            isVisible={this.state.isStartDateTimePickerVisible}
            onConfirm={this.handleStartDatePicked}
            onCancel={this.hideStartDateTimePicker}
          />

          {/* <TextInput placeholder="End Date" onChange={(event) => this.setState({ goal_end: event.text })} />

          <TextInput placeholder="Frequency" onChange={(event) => this.setState({ goal_frequency: event.text })} /> */}
        </View>
      </>
    );
  }
}
