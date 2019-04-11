// import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

// write component
class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    }
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        // this.onChangeEmail = this.onChangeEmail.bind(this)
    }
    componentDidMount() {
        const {navigate} = this.props.navigation;
        return navigate('Profile')
    }
    onChangeEmail(e) {
        console.log('onChangeEmail', e)
        this.setState({ email: e}) 
    }
    onChangePassword(e) {
        this.setState({ password: e})
    }
    onPress() {
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log('token ', response.data.data.token)
            })
    }
    render() {
        const {navigate} = this.props.navigation;
        return navigate('Profile')
        return (
            <View>
                <TextInput
                    style={{ height: 40, fontWeight: 'bold', fontSize: 20 }}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={this.onChangeEmail.bind(this)}
                />
                <TextInput
                    secureTextEntry
                    style={{ height: 40, fontWeight: 'bold', fontSize: 20 }}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.onChangePassword.bind(this)}
                />
                <Button  
                    title="Login"
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }
}

// export
export default Login;