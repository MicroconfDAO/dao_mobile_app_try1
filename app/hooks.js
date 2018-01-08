import Kakka from 'kakka-core';

import {
    AsyncStorage,
    Alert
} from 'react-native';

import {doImportPrivateKey} from './actions';

const ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS';

const {hook, fire} = Kakka({});

hook(Kakka.ACTIONS.STARTUP, action => {
    AsyncStorage.getItem(ACCOUNT_ADDRESS)
        .then(data => {
            Alert.alert(JSON.stringify(data))
        })
        .catch(err => {
            Alert.alert(err.message)
        })
})

hook(doImportPrivateKey, action => {
    const key = action.payload;

    AsyncStorage.setItem(ACCOUNT_ADDRESS, key)
              .then(() => Alert.alert('saved'))
              .catch(err => Alert.alert(err.message))
})
