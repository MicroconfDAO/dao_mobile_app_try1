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
  AsyncStorage
} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

var Web3 = require('web3');
import {createNewAccount} from './actions';

const web3 = new Web3(new Web3.providers.HttpProvider("http://18.194.167.176:8545"));

export default class MainScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={{marginBottom: 20}}>
          <Text style={styles.welcome}>
            Welcome to
          </Text>
          <Text style={styles.welcome}>
            Microconf DAO!
          </Text>
        </View>
        
        <View style={{marginBottom: 10}}>
          <Button
            title="Create new account"
            onPress={() => {
              navigate('CreateNewAccountView');
              createNewAccount();
            }}
          />
        </View>

        <View>
          <Button
            title="Import existing account"
            onPress={() =>
              navigate('ImportAccountView')
            }
          />
        </View>

        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
          onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
        >
          <Tab
            barBackgroundColor="#37474F"
            label="Movies & TV"
            icon={<Icon size={24} color="white" name="tv" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Music"
            icon={<Icon size={24} color="white" name="music-note" />}
          />
          <Tab
            barBackgroundColor="#5D4037"
            label="Books"
            icon={<Icon size={24} color="white" name="book" />}
          />
          <Tab
            barBackgroundColor="#3E2723"
            label="Newsstand"
            icon={<Icon size={24} color="white" name="newspaper" />}
          />
        </BottomNavigation>

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { Alert.alert("hi") }}
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
    margin: 10
  }
});
