import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, theme } from '../styles/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import { messages } from '../utils/messages';

const { width, height } = Dimensions.get('window');

const widthScreen = width * 0.95;

const Header = ({ navigation, label, logout, leftItem }) => {

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                {leftItem ? leftItem : navigation.canGoBack() ?
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            name="arrow-back-ios"
                            size={24}
                            color={colors.text} />
                    </TouchableOpacity>
                    :
                    <></>}
            </View>

            <View style={styles.headerText}>
                <Text style={theme.title}>{label}</Text>
            </View>

            {logout ?
                <TouchableOpacity
                    onPress={() => messages.success('Sair', 'saindo...')}
                    style={styles.logout}>
                    <Text style={[theme.title, { color: colors.red }]}>Sair</Text>
                </TouchableOpacity>
                :
                <View style={styles.logout}></View>
            }
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 100,
        width: width,
        paddingHorizontal: 8,
        backgroundColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    headerLeft: {
        width: '20%'
    },
    headerText: {
        width: widthScreen * 0.6,
    },
    logout: {
        width: widthScreen * 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})