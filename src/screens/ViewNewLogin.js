import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { theme } from '../styles/Theme';
import Checkbox from 'expo-checkbox';
const base64 = require('base-64');
import * as SecureStore from 'expo-secure-store';
import { AppContext } from '../context/AppContext';
import LoginScreen from "react-native-login-screen";
import axios from 'axios';

// import { Container } from './styles';

const ViewNewLogin = ({ navigation }) => {

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);

    const { username, password, saveUser } = useContext(AppContext);
    console.log('VARS=>', username, password);

    /*const [usuario, setUsuario] = useState({
        username: '',
        password: '',
        saveUser: false,
    });*/

    const usuario = {
        username: '',
        password: ''
    };

    function login(user, pass) {

        setLoading(true);

        async function testLogin() {

            /*const response = await fetch('http://177.44.248.30:3333/auth', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' +
                        base64.encode(user + ":" + pass)
                }
            });
            const json = await response.json();*/

            const response = await axios.get('http://177.44.248.30:3333/auth', {
                headers: {
                    'Authorization': 'Basic ' +
                        base64.encode(user + ":" + pass)
                }
            });

            if (response.status == 200) {

                const json = response.data;

                console.log('JSON', json);

                saveUser(user, pass);

                navigation.reset({
                    index: 0,
                    routes: [{ name: "ViewNav1" }]
                })


            } else if (response.status == 400) {
                Alert.alert('Que pena 😥', json.message);
            } else if (response.status == 401) {
                Alert.alert('Que pena 😥', json.error);
            }

            setLoading(false);

        }

        testLogin();

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[theme.login, styles.container]}>
            {loading == true ? <ActivityIndicator size='large' color='#fff' />
                :
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LoginScreen
                        style={[theme.login, { marginTop: 8 }]}
                        logoImageSource={require("../assets/logo.png")}
                        onLoginPress={() => login(usuario.username, usuario.password)}
                        onSignupPress={() => { }}
                        onEmailChange={(user) => { usuario.username = user }}
                        textInputProps={{ keyboardType: "email-address" }} //vai definir para o input da senha também
                        onPasswordChange={(password) => { usuario.password = password }}>
                    </LoginScreen>
                </ScrollView>
            }
        </KeyboardAvoidingView>
    );
}

export default ViewNewLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});