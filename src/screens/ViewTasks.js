import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import LottieView from 'lottie-react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewTasks = () => {

    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')

    useEffect(() => {

        const getTasksAsync = async () => {
            try {
                const variavel = await AsyncStorage.getItem('@tasklist');
                if (variavel != null) {
                    setTaskList(JSON.parse(variavel));
                }
            } catch (e) {
                console.log('ERROR GET=>', e)
            }
        }

        getTasksAsync()

    }, []) //executa apenas na primeira renderizacao do componente

    useEffect(() => {

        const setTaskAsync = async () => {
            try {
                if (taskList) {
                    await AsyncStorage.setItem('@tasklist', JSON.stringify(taskList));
                }
            } catch (e) {
                console.log('ERROR=>', e);
            }
        }

        setTaskAsync()

    }, [taskList])

    const updateTaskList = async () => {
        if (task) {

            const newTask = {
                id: String(new Date().getTime()),
                name: task,
                done: false
            }

            const orderTaskList = [...taskList, newTask]
                .sort((a, b) => (a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)));

            /*
                if(a.name > b.name){
                    return 1;
                }else if(b.name > a.name){
                    return -1;
                }else{
                    return 0;
                }
            */

            setTaskList(orderTaskList)
            setTask('')

            //await AsyncStorage.setItem('@tasklist', JSON.stringify(orderTaskList));

        } else {
            Alert.alert('Ops', 'Tarefa não pode ser em branco');
        }
    }

    const deleteTask = async (id) => {
        //queremos excluir o item que contém este ID da lista
        Alert.alert('Atenção', 'Deseja mesmo excluir a tarefa?', [
            {
                text: "Sim",
                onPress: async () => {

                    const newList = [...taskList.filter((item) => item.id !== id)]
                    setTaskList(newList)

                    //await AsyncStorage.setItem('@tasklist', JSON.stringify(newList));

                }
            },
            {
                text: "Não",
                onPress: () => { }
            }
        ]);
    }

    const handleCheckTask = async (id) => {

        const newTaskList = taskList.map(item => {
            if (item.id == id) {
                //encontramos o elemento a ser alterado
                return { ...item, done: !item.done }
            }
            return item;
        })

        setTaskList(newTaskList);

        //await AsyncStorage.setItem('@tasklist', JSON.stringify(newTaskList));

    }

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Tarefa</Text>

            <TextInput
                keyboardType='email-address'
                placeholder='Digite a tarefa'
                placeholderTextColor='#ccc'
                value={task}
                onChangeText={(value) => setTask(value)}
                style={styles.input} />

            <CustomButton
                backgroundColor="#fff"
                textColor="#122a57"
                label="Salvar"
                onPress={updateTaskList}
            />
            {
                taskList != null && taskList.length > 0 ?
                    taskList.map(item => {
                        return (
                            <View
                                key={item.id}
                                style={styles.itemList}>
                                <Checkbox
                                    value={item.done}
                                    onValueChange={() => handleCheckTask(item.id)}
                                    color={item.done ? '#444' : '#fff'}
                                />
                                <Text
                                    style={[styles.itemText,
                                    { textDecorationLine: item.done ? 'line-through' : 'none' }]}>
                                    {item.name}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => deleteTask(item.id)}>
                                    <Ionicons name="trash-outline" size={24} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    :
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <LottieView
                            autoPlay
                            loop={true}
                            style={{
                                width: 250,
                                height: 250,
                            }}
                            source={require('../assets/animations/empty.json')}
                        />
                        <Text style={{ color: '#bebebe', fontSize: 20 }}>Lista vazia</Text>
                    </View>
            }
        </View>
    );
}

export default ViewTasks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#122a57',
        alignItems: 'flex-start',
    },
    input: {
        height: 40,
        width: '100%',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#fff',
        fontSize: 16
    },
    label: {
        color: '#fff',
        fontSize: 20
    },
    itemList: {
        width: '100%',
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        flex: 1,
        color: '#fff',
        paddingLeft: 8,
        fontSize: 24
    }
});