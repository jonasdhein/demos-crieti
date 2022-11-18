import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import LottieView from 'lottie-react-native';
import Checkbox from 'expo-checkbox';

const ViewTasks = () => {

    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')

    const updateTaskList = () => {
        if (task) {
            const newTask = {
                id: String(new Date().getTime()),
                name: task,
                done: false
            }

            setTaskList([...taskList, newTask])
            setTask('')
        } else {
            Alert.alert('Ops', 'Tarefa não pode ser em branco');
        }
    }

    const deleteTask = (id) => {
        //queremos excluir o item que contém este ID da lista
        Alert.alert('Atenção', 'Deseja mesmo excluir a tarefa?', [
            {
                text: "Sim",
                onPress: () => {
                    setTaskList([...taskList.filter((item) => item.id !== id)])
                }
            },
            {
                text: "Não",
                onPress: () => { }
            }
        ]);
    }

    const handleCheckTask = (id) => {

        const newTaskList = taskList.map(item => {
            if(item.id == id){
                //encontramos o elemento a ser alterado
                return {...item, done: !item.done}
            }
            return item;
        })

        setTaskList(newTaskList);

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
                taskList.length > 0 ?
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
                                <Text style={[styles.itemText, { textDecorationLine: item.done ? 'line-through' : 'none' }]}>{item.name}</Text>
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
        color: '#fff',
        fontSize: 24
    }
});