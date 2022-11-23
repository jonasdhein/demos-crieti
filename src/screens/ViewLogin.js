import React, { useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { theme } from '../styles/Theme';
const base64 = require('base-64');

const ViewLogin = (props) => {

    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        username: '',
        password: ''
    });

    async function login() {

        setLoading(true);
        const response = await fetch('http://177.44.248.30:3333/auth', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(usuario.username + ":" + usuario.password)
            }
        });
        const json = await response.json();

        setLoading(false);
        if (json.id) {
            //navegar adiante
            props.navigation.navigate("ViewNav1");
        } else {
            Alert.alert('Que pena 😥', json.message);
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>

            {loading == true ? <ActivityIndicator size='large' />
                : <>
                    <TextInput
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={usuario.username}
                        onChangeText={(value) => setUsuario({ ...usuario, username: value })}
                        style={theme.input}
                        placeholder="Usuário" />

                    <TextInput
                        secureTextEntry={true}
                        value={usuario.password}
                        autoCapitalize='none'
                        onChangeText={(value) => setUsuario({ ...usuario, password: value })}
                        style={theme.input}
                        placeholder="Senha" />
                    <CustomButton
                        label="ENTRAR"
                        onPress={() => login()}
                        backgroundColor="#bebebe"
                        textColor="#000" />
                </>
            }

        </KeyboardAvoidingView>
    );
}

export default ViewLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});