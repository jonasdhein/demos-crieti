import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../styles/Theme';

// import { Container } from './styles';

const ItemUser = ({ item, alterUser, deleteUser }) => {
    return (
        <TouchableOpacity
            onPress={alterUser}
            onLongPress={deleteUser}
            activeOpacity={0.6}
            style={[styles.card, theme.shadows]} key={item.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name={item.sex == 'M' ? 'man' : 'woman'} size={24}
                    color={item.sex == 'M' ? "#7986CB" : "#F06292"}
                    style={{ marginRight: 16 }} />
                <View>
                    <Text style={styles.titleCard}>{item.name}</Text>
                    <Text style={styles.subtitleCard}>{item.email}</Text>
                </View>
            </View>
            <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
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

export default ItemUser;