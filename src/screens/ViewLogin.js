import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Checkbox from 'expo-checkbox';
import * as SecureStore from 'expo-secure-store';
import { AppContext } from '../context/AppContext';
import * as LocalAuthentication from 'expo-local-authentication';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import config from '../config/config';
import { apiUserService } from '../api/ApiUser/ApiUser.service';

import { colors, theme } from '../styles/Theme';

const ViewLogin = ({ navigation }) => {

    //faz com que não seja mais necessário importar o arquivo de config
    //em todas as telas que formos utilizar o axios
    axios.defaults.baseURL = config.baseURL;

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        username: '',
        password: '',
        saveUser: false,
    });

    const { saveUser } = useContext(AppContext)

    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    // Check if hardware supports biometrics
    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
            console.log('compatible => ', compatible);
        })();
    }, []);

    useEffect(() => {

        async function getSecureStore() {
            const _username = await SecureStore.getItemAsync(fieldUser);
            const _password = await SecureStore.getItemAsync(fieldPassword);
            if (_username && _password) {
                setUsuario({
                    username: _username,
                    password: _password,
                    saveUser: true
                });
                //login(_username, _password);
            }
        }

        getSecureStore();

    }, []) //seja executado somente na primeira renderizacao do componente

    function login(user, pass) {

        setLoading(true);

        setTimeout(() => {

            async function testLogin() {
                const response = await apiUserService.authUser(user, pass);

                console.log('USUARIO=>', response);

                setLoading(false);
                if (response != null) {
                    if (usuario.saveUser) {
                        await SecureStore.setItemAsync(fieldUser, usuario.username);
                        await SecureStore.setItemAsync(fieldPassword, usuario.password);
                        console.log("gravou");
                    } else {
                        await SecureStore.deleteItemAsync(fieldUser);
                        await SecureStore.deleteItemAsync(fieldPassword);
                    }

                    //navegar adiante

                    const AUTH_TOKEN = 'Basic ' +
                        base64.encode(usuario.username + ":" + usuario.password);

                    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

                    //salva as informações do usuário no contexto
                    saveUser(response.data);

                    navigation.reset({
                        index: 0,
                        routes: [{ name: "ViewNav1" }]
                    })

                } else {
                    Alert.alert('Que pena 😥', 'Erro ao realizar o login');
                }
            }

            testLogin();

        }, 900)

    }

    const handleBiometricAuth = async () => {
        // Check if hardware supports biometrics
        //const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        // Fallback to default authentication method (password) if Fingerprint is not available
        if (isBiometricSupported == false) {
            Alert.alert('Biometria não localizada',
                'Faça o login através da sua senha', [
                {
                    text: 'OK',
                    onPress: null,
                },
            ]);
            return
        }

        // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
        let supportedBiometrics;
        if (isBiometricSupported) {
            supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
        }

        console.log('TYPES=>', supportedBiometrics);
        // Check Biometrics are saved locally in user's device
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        console.log('savedBiometrics', savedBiometrics);
        if (savedBiometrics == false) {
            Alert.alert('Sem biometria salva',
                'Faça o login através da sua senha', [
                {
                    text: 'OK',
                    onPress: null,
                },
            ]);
            return
        }
        // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with Biometrics',
            cancelLabel: 'Cancel',
            disableDeviceFallback: true,
        });
        // Log the user in on success
        console.log('biometricAuth', biometricAuth);
        if (biometricAuth) {
            login(usuario.username, usuario.password);
        }

        //console.log({ isBiometricAvailable });
        //console.log({ supportedBiometrics });
        //console.log({ savedBiometrics });
        //console.log({ biometricAuth });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>

            {loading == true ? <ActivityIndicator size='large' />
                : <>
                    <AntDesign
                        name="login"
                        size={86}
                        color={colors.primary}
                        style={{ marginBottom: 50 }} />
                    <TextInput
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholderTextColor={colors.gray}
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

                    <View style={styles.checkbox}>
                        <Checkbox
                            value={usuario.saveUser}
                            onValueChange={() =>
                                setUsuario({ ...usuario, saveUser: !usuario.saveUser })
                            }
                            color={colors.primary}
                        />

                        <Text style={[theme.label, { marginLeft: 8 }]}>Manter-me conectado</Text>
                    </View>

                    <CustomButton
                        label="ENTRAR"
                        onPress={() => login(usuario.username, usuario.password)}
                        backgroundColor={colors.primary}
                        textColor={colors.secondary} />

                    {isBiometricSupported &&
                        <TouchableOpacity
                            onPress={() => handleBiometricAuth()}
                            style={{ marginTop: 16 }}>
                            <Ionicons
                                name="finger-print-outline"
                                size={48}
                                color={colors.primary} />
                        </TouchableOpacity>
                    }
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
        backgroundColor: colors.background
    },
    checkbox: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    }
});