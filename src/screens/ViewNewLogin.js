import React from 'react';
import { View } from 'react-native';
import LoginScreen from "react-native-login-screen";

const ViewNewLogin = () => {
    return (
        <LoginScreen
            style={{ backgroundColor: '#444' }}
            logoImageSource={require("../assets/logo-crie-ti.png")}
            onLoginPress={() => { }}
            onSignupPress={() => { }}
            onEmailChange={(email) => { }}
            onPasswordChange={(password) => { }}
        />
    );
}

export default ViewNewLogin;