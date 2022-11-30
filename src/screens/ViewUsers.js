import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native';
const base64 = require('base-64');
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../styles/Theme';
import CustomButton from '../components/CustomButton';

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

        console.log('CREDENTIALS=>', _username, _password);

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
        <View style={theme.container}>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    const icone_sexo = item.sex == 'M' ? 'man' : 'woman';

                    return <TouchableOpacity
                        activeOpacity={0.6}
                        style={[styles.card, theme.shadows]} key={item.id}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name={icone_sexo} size={24}
                                color={item.sex == 'M' ? "#7986CB" : "#F06292"}
                                style={{ marginRight: 16 }} />
                            <View>
                                <Text style={styles.titleCard}>{item.name}</Text>
                                <Text style={styles.subtitleCard}>{item.email}</Text>
                            </View>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 16,
        padding: 8,
        height: 55,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleCard: {
        color: '#000',
        fontSize: 16,
        fontFamily: "RobotoSlab_700Bold",
    },
    subtitleCard: {
        color: '#555',
        fontSize: 13,
        fontFamily: "RobotoSlab_300Light",
    }
});