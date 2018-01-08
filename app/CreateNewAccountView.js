import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export default class CreateNewAccountView extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { key: 'test val' };
  }
  render() {
    return (
      <View>
        <Text>Please wait</Text>
        <TextInput
          multiline={true}
          editable = {false}
          value={this.state.key}
        />


      </View>
    );
  }
}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#00ff00',
    height: 56,
  },
});
