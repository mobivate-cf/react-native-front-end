import React from 'react';
import { Button, Keyboard, View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class CreateGoal extends React.Component {
  static navigationOptions = { headerTitle: 'Create New Goal', headerLeft: null };
  constructor(props) {
    super(props);
    this.state = {};
    this.state.isStartDateTimePickerVisible = false;
  }

  showStartDateTimePicker() {
    alert('hello');
    this.setState({ isStartDateTimePickerVisible: true });
  }
  hideStartDateTimePicker() {
    this.setState({ isStartDateTimePickerVisible: false });
  }
  handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.hideStartDateTimePicker();
  };

  render() {
    return (
      <>
        <View>
          {/* <TextInput
            placeholder = 'Name'
            onChange = { (event) => this.setState({ goal_name: event.text }) }
            maxLength = {30}
            onBlur = { Keyboard.dismiss }
          /> */}
          <Button title="Show DatePicker" onPress={() => this.showStartDateTimePicker()} />
          <DateTimePicker
            isVisible={true} // { this.state.isDateTimePickerVisible }
            onConfirm={this.handleDatePicked}
            onCancel={this.hideStartDateTimePicker}
          />

          <TextInput placeholder="End Date" onChange={(event) => this.setState({ goal_end: event.text })} />

          <TextInput placeholder="Frequency" onChange={(event) => this.setState({ goal_frequency: event.text })} />
        </View>
      </>
    );
  }
}
