import './global';
import './app/hooks';
import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, Alert, Button, View, Icon, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/MainScreen';
import ImportAccountView from './app/ImportAccountView';
import CreateNewAccountView from './app/CreateNewAccountView';
import Kakka from 'kakka-core';

const {} = new Kakka({});

const TITLE = "Microconf DAO";

const App = StackNavigator({
    MainScreen: { 
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            title: TITLE
        })
    },
    ImportAccountView: { 
        screen: ImportAccountView,
        navigationOptions: ({navigation}) => ({
            title: TITLE
        })
    },
    CreateNewAccountView: {
        screen: CreateNewAccountView,
        navigationOptions: ({navigation}) => ({
            title: TITLE
        })
    }
});

AppRegistry.registerComponent('WileyDAO', () => App);
