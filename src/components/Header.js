import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, theme } from '../styles/Theme';
import Avatar from './Avatar';

// import { Container } from './styles';

const Header = ({ label, logout, avatar }) => {


    return (
        <View style={styles.header}>
            <View>
                {avatar}
            </View>

            <Text style={[theme.title, { flex: 1, backgroundColor: 'red' }]}>{label}</Text>

            {logout ?
                <TouchableOpacity style={styles.logout}>
                    <Text style={[theme.title, { color: colors.red }]}>Sair</Text>
                </TouchableOpacity>
                :
                <View style={styles.logout}><Text>oi</Text></View>
            }
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingHorizontal: 8,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    logout: {
        flex: 1,
        width: 80,
        backgroundColor: colors.purple,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})