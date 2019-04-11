/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import App from './App';
import {name as appName} from './app.json';
// import App from './components/App';
import About from './components/About';
import Login from './components/Login';

///

const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    Profile: {screen: About},
});
const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => App);
