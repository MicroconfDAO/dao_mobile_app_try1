import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button,
  StackNavigator,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

import {doImportPrivateKey} from './actions';

export default class ImportAccountView extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { key: '' };
  }
  render() {
    return (
      <View>
        <Text>Please paste private key in field below</Text>
        <TextInput
          multiline={true}
          editable = {true}
          onChangeText={(key) => this.setState({key})}
          value={this.state.key}
        />
        <Button
          title="Import"
          onPress={() => doImportPrivateKey(this.state.key)}
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
