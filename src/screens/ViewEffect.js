import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';

const { width } = Dimensions.get('window');
const widthDefault = width * 0.5;

console.log('TAMANHO DA TELA => ', width);

const ViewEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('RENDERIOU PELA PRIMEIRA VEZ')
    }, [])

    useEffect(() => {
        console.log('RENDERIZA SEMPRE')
    })

    useEffect(() => {
        console.log('RENDERIZOU PQ O COUNT MUDOU')
    }, [count])

    return (
        <View style={styles.container}>

            <View style={styles.view}>
                <Text style={styles.text}>Count: {count}</Text>
               
                <CustomButton
                    label="Incrementar"
                    onPress={() => setCount(count + 1)}
                />
            </View>

        </View>
    );
}

export default ViewEffect;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9400d3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: widthDefault
    },
    button: {
        backgroundColor: '#fff',
        height: 42,
        borderRadius: 8,
        padding: 8,
        marginTop: 8
    },
    text: {
        color: '#fff',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    },
    textButton: {
        color: '#9400d3',
        fontSize: 24
    }
});