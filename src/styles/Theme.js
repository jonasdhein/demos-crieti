import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    login: {
        flex: 1,
        backgroundColor: '#555'
    },
    input: {
        borderWidth: 1,
        borderColor: '#555',
        height: 42,
        borderRadius: 8,
        width: '80%',
        marginBottom: 16,
        paddingLeft: 8,
        fontFamily: "AveriaLibre_300Light"
    },
    button: {
        backgroundColor: '#333',
        height: 48,
        width: '80%',
        marginTop: 16,
        borderRadius: 8,
        padding: 8,
    },
    textButton: {
        color: '#9400d3',
        fontSize: 24,
        fontFamily: "AveriaLibre_700Bold",
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontFamily: "AveriaLibre_400Regular"
    },
    title: {
        fontSize: 26,
        fontFamily: "AveriaLibre_700Bold"
    },
    subTitle: {
        fontSize: 20,
        fontFamily: "AveriaLibre_400Regular"
    },
    shadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    }
});