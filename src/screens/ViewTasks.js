import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const ViewTasks = () => {

    const [taskList, setTaskList] = useState([])

    return (
        <View style={styles.container}>
            <TextInput
                keyboardType='email-address'
                placeholder='Digite a tarefa'
                placeholderTextColor='#bebebe'
                style={styles.input}/>

            {
                taskList.map((item) => {
                    return <Text style={{color: '#fff', fontSize: 24}}>{item.name}</Text>
                })
            }
        </View>
    );
}

export default ViewTasks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#122a57',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    }
});