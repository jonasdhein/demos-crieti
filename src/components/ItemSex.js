import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// import { Container } from './styles';

const ItemSex = ({user, setUser, icon, sex}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor: user.sex == sex ? '#9400d3' : '#555' }]}
            onPress={() => setUser({ ...user, sex: sex })}>
            <FontAwesome5 name={icon} size={32} color={user.sex == sex ? '#9400d3' : '#555'} />
        </TouchableOpacity>
    );
}

export default ItemSex;

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 8
    }
});