/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';

console.log('printing App');
AppRegistry.registerComponent(appName, () => App);
