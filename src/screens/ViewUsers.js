import { useContext, useEffect, useState, useRef } from 'react';
import {
    Alert,
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
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import { colors, theme } from '../styles/Theme';
import { AppContext } from '../context/AppContext';
import { FontAwesome5 } from '@expo/vector-icons';
import FloatingButton from '../components/FloatingButton';
import { Modalize } from 'react-native-modalize';
import ItemUser from '../components/ItemUser';
import ItemSex from '../components/ItemSex';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import { apiUserService } from '../api/ApiUser/ApiUser.service';

const { width, height } = Dimensions.get('window');

export default ViewUsers = ({ navigation, route }) => {

    //console.log('PROPS PARAMS=>', route.params);

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

    async function delUser(id) {
        try {

            Alert.alert("Confirma?", "Excluir usuário", [
                {
                    onPress: async () => {

                        const response = await apiUserService.deleteUser(`/users/${id}`);

                        if (response) {
                            Alert.alert('Usuário excluído com sucesso')
                        } else {
                            Alert.alert('O usuário não pôde ser excluído')
                        }

                        listUsers();

                    },
                    text: "Sim"
                },
                {
                    onPress: () => { console.log('NÃO') },
                    text: "Não"
                }
            ])

        } catch (error) {
            Alert.alert('Erro ao excluir');
        }
    }

    async function saveUser() {
        try {

            if (user.age <= 0) {
                Alert.alert('Informe a idade');
                return;
            }

            const payload = {
                age: user.age,
                email: user.email,
                name: user.name,
                password: user.password,
                sex: user.sex
            }

            if (user.id > 0) {
                const response = await apiUserService.putUser(payload);

                if (response != null) {

                    modalRef.current?.close();

                    listUsers();

                } else {
                    Alert.alert('Ops', 'Erro ao salvar usuário');
                }
            } else {
                const response = await apiUserService.postUser(payload);

                if (response != null) {

                    modalRef.current?.close();

                    listUsers();

                } else {
                    Alert.alert('Ops', 'Erro ao salvar usuário');
                }
            }


        } catch (error) {
            Alert.alert('Ops', error.message);
        }
    }

    async function listUsers() {

        setLoading(true);

        const response = await apiUserService.getUsers();

        if (response != null) {
            setUsers(response);
        } else {
            Alert.alert('Ops, deu ruim 😥', 'Erro ao listar usuários');
        }

        setLoading(false);

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
                        <ItemUser
                            item={item}
                            deleteUser={() => delUser(item.id)}
                            alterUser={() => alterUser(item)} />
                    )}
                />

                <FloatingButton
                    icon="plus"
                    color="#333"
                    onPress={() => newUser()}
                />


                <Modalize
                    ref={modalRef}
                    modalStyle={styles.modal}
                    snapPoint={height * 0.5}
                    modalHeight={height * 0.8}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}>
                        <View>
                            <Text style={[theme.subTitle, {
                                textAlign: 'center'
                            }]}>{user.id > 0 ? "Alterar Usuário" : "Novo Usuário"}</Text>

                            <Text style={theme.label}>Nome</Text>
                            <TextInput
                                keyboardType='defaults'
                                autoCapitalize='words'
                                placeholderTextColor={colors.gray}
                                value={user.name}
                                onChangeText={(name) => { setUser({ ...user, name: name }) }}
                                style={styles.modalInput}
                                placeholder="Nome" />

                            <Text style={theme.label}>E-mail</Text>
                            <TextInput
                                keyboardType='email-address'
                                autoCapitalize='words'
                                placeholderTextColor={colors.gray}
                                value={user.email}
                                onChangeText={(email) => { setUser({ ...user, email: email }) }}
                                style={styles.modalInput}
                                placeholder="E-mail" />

                            <Text style={theme.label}>Senha</Text>
                            <TextInput
                                keyboardType='defaults'
                                autoCapitalize='none'
                                placeholderTextColor={colors.gray}
                                value={user.password}
                                onChangeText={(password) => { setUser({ ...user, password: password }) }}
                                style={styles.modalInput}
                                placeholder="E-mail" />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Idade</Text>
                                    <TextInput
                                        keyboardType='number-pad'
                                        placeholderTextColor={colors.gray}
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
        backgroundColor: colors.secondary
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#555',
        color: colors.primary,
        height: 42,
        borderRadius: 8,
        marginTop: 4,
        width: '100%',
        marginBottom: 16,
        paddingLeft: 8,
        fontFamily: "RobotoSlab_400Regular"
    },
});