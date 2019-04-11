/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import App from './components/App';
import About from './components/About';

AppRegistry.registerComponent(appName, () => About);
