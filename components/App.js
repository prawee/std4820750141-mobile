// import library
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';

// write component
class App extends React.Component {
    render() {
        return (
            //component about react native
            <View>
                <Header title="Login" />
                <Login />
            </View>
        );
    }
}

// export 
export default App;
