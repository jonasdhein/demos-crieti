import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';

const ViewTasks = () => {

    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')

    const updateTaskList = () => {
        if (task) {
            const newTask = {
                id: String(new Date().getTime()),
                name: task
            }

            setTaskList([...taskList, newTask])
            setTask('')
        } else {
            Alert.alert('Ops', 'Tarefa não pode ser em branco');
        }
    }

    const deleteTask = (id) => {
        //queremos excluir o item que contém este ID da lista
        setTaskList([...taskList.filter((item) => item.id !== id)])
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
                taskList.map((item) => {
                    return (
                        <TouchableOpacity
                            style={{ margin: 4 }}
                            key={item.id}
                            onLongPress={() => deleteTask(item.id)}>
                            <Text style={{ color: '#fff', fontSize: 24 }}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
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
        fontSize: 14
    },
    label: {
        color: '#fff',
        fontSize: 18
    }
});