import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/Theme';

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

            <View>
                <Text style={styles.text}>Count: {count}</Text>
               
                <CustomButton
                    label="Incrementar"
                    backgroundColor={colors.primary}
                    textColor={colors.text}
                    onPress={() => setCount(count + 1)}
                />
            </View>

        </View>
    );
}

export default ViewEffect;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.text,
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    }
});