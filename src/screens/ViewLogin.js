import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
const base64 = require('base-64');

const ViewLogin = () => {

    const [objeto, setObjeto] = useState('');
    const [senha, setSenha] = useState('');

    async function login() {

        const response = await fetch('http://177.44.248.30:3333/auth', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode("mateus@mateus.com" + ":" + "123456")
            }
        });
        const json = await response.json();
        if(json.id){
            //navegar adiante
        }else{
            Alert.alert('Ops', json.message);
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Usuário" />
            <TextInput
                style={styles.input}
                placeholder="Senha" />
            <CustomButton
                label="ENTRAR"
                onPress={() => login()} />
        </KeyboardAvoidingView>
    );
}

export default ViewLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        height: 42,
        width: 250
    }
});