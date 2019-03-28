// import library
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header'

// write component
class App extends React.Component {
    render() {
        return (
            //component about react native
            <View>
                <Header title="Albums" />
                <Text>Hello World</Text>
            </View>
        );
    }
}

// export 
export default App;
