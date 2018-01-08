/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button
} from 'react-native';
// import Web3 from 'web3';
var Web3 = require('web3');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class ComponentX extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Text>
          xxx: {this.state.text}
        </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    )
  }
}

const web3 = new Web3(new Web3.providers.HttpProvider("http://18.194.167.176:8545"));

export default class MainScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <ComponentX />

        <Button
          title="Go to SecondScreen"
          onPress={() =>
            navigate('SecondScreen')
          }
        />

        <Button
          title="get peers"
          onPress={() => {
            web3.eth.net.getPeerCount(function callback(error, result){
                if(!error) {
                    Alert.alert(`peer count = ${result}`);
                } else
                    Alert.alert(`${error}`);
            });
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
