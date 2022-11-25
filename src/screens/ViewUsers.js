import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
const base64 = require('base-64');
import * as SecureStore from 'expo-secure-store';
import { theme } from '../styles/Theme';

export default ViewUsers = () => {

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    /*
        Busca os usuários da API (através do listUsers)
        na criação do componente ViewUsers
    */
    useEffect(() => {
        listUsers();
    }, [])

    async function listUsers() {

        setLoading(true);

        const _username = await SecureStore.getItemAsync(fieldUser);
        const _password = await SecureStore.getItemAsync(fieldPassword);

        const response = await fetch('http://177.44.248.30:3333/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(_username + ":" + _password)
            }
        });
        const json = await response.json();

        setLoading(false);
        if (json) {
            setUsers(json);
        } else {
            Alert.alert('Ops, deu ruim 😥', json.message);
        }

    }

    return (
        <View>
            <Text style={theme.title}>Lista de Usuários</Text>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {
                        users.map((item) => {
                            console.log('ITEM=>', item)
                            return (
                                <View key={item.id}>
                                    <Text style={theme.label}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}