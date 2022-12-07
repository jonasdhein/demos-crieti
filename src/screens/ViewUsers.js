import { useContext, useEffect, useState, useRef } from 'react';
import {
    Dimensions,
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
const base64 = require('base-64');
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../styles/Theme';
import { AppContext } from '../context/AppContext';
import { FontAwesome5 } from '@expo/vector-icons';
import FloatingButton from '../components/FloatingButton';
import { Modalize } from 'react-native-modalize';
import ItemUser from '../components/ItemUser';
import ItemSex from '../components/ItemSex';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');

export default ViewUsers = ({ navigation }) => {

    const initialUser = {
        id: 0,
        age: 0,
        email: "",
        name: "",
        password: "",
        sex: ""
    }

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(initialUser);

    const { username, password } = useContext(AppContext);

    const modalRef = useRef(null);

    /*
        Busca os usuários da API (através do listUsers)
        na criação do componente ViewUsers
    */
    useEffect(() => {
        listUsers();
    }, [])

    function onOpenModal() {
        modalRef.current?.open();
    }

    function alterUser(user) {
        onOpenModal()
        setUser(user)
    }

    function newUser() {
        onOpenModal()
        setUser(initialUser)
    }

    function saveUser() {
        console.log('SALVAR')
    }

    async function listUsers() {

        setLoading(true);

        //console.log('CREDENTIALS=>', _username, _password);

        const response = await fetch('http://177.44.248.30:3333/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(username + ":" + password)
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
        <SafeAreaView style={theme.safeArea}>
            <View style={theme.container}>
                {/* <SkeletonPlaceholder
                speed={600}>
                <SkeletonPlaceholder.Item
                    width={200}
                    height={45} />
            </SkeletonPlaceholder> */}
                <FlatList
                    data={users}
                    onRefresh={() => listUsers()}
                    refreshing={loading}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ItemUser item={item} alterUser={() => alterUser(item)} />
                    )}
                />

                <FloatingButton
                    icon="plus"
                    color="#333"
                    onPress={() => newUser()}
                />


                <Modalize
                    ref={modalRef}
                    snapPoint={400}
                    modalHeight={height * 0.8}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}>
                        <View style={styles.modal}>
                            <Text style={[theme.subTitle, {
                                textAlign: 'center'
                            }]}>{user.id > 0 ? "Alterar Usuário" : "Novo Usuário"}</Text>

                            <Text style={theme.label}>Nome</Text>
                            <TextInput
                                keyboardType='defaults'
                                autoCapitalize='words'
                                value={user.name}
                                onChangeText={(name) => { setUser({ ...user, name: name }) }}
                                style={styles.modalInput}
                                placeholder="Nome" />

                            <Text style={theme.label}>E-mail</Text>
                            <TextInput
                                keyboardType='email-address'
                                autoCapitalize='words'
                                value={user.email}
                                onChangeText={(email) => { setUser({ ...user, email: email }) }}
                                style={styles.modalInput}
                                placeholder="E-mail" />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Idade</Text>
                                    <TextInput
                                        keyboardType='number-pad'
                                        value={user.age.toString()}
                                        onChangeText={(age) => { setUser({ ...user, age: age }) }}
                                        style={[styles.modalInput, { width: '40%' }]}
                                        placeholder="Idade" />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Sexo</Text>
                                    <ScrollView horizontal={true}>
                                        <ItemSex
                                            setUser={setUser}
                                            user={user}
                                            icon="female"
                                            sex="F" />
                                        <ItemSex
                                            setUser={setUser}
                                            user={user}
                                            icon="male"
                                            sex="M" />
                                    </ScrollView>
                                </View>
                            </View>

                            <CustomButton
                                label="Salvar"
                                onPress={(saveUser)}
                                textColor="#fff"
                                width="100%"
                                backgroundColor="#9400d3" />
                        </View>
                    </KeyboardAvoidingView>
                </Modalize>


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 12,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#555',
        height: 42,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingLeft: 8,
        fontFamily: "RobotoSlab_400Regular"
    },
});