import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
    text: '#1DF2CB',
    background: '#110226',
    red: '#E74C3C',
    primary: '#7326BF',
    secondary: '#1B0140',
    alternative: '#6626A6',
    gray: '#34495E',
    placeholder: '#aaa'
}

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.background
    },
    login: {
        flex: 1,
        backgroundColor: colors.background
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primary,
        color: colors.text,
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
        color: colors.text,
        fontSize: 24,
        fontFamily: "AveriaLibre_700Bold",
        textAlign: 'center',
    },
    titleBoldAveriaLibre: {
        fontFamily: "AveriaLibre_700Bold",
    },
    label: {
        fontSize: 16,
        color: colors.text,
        fontFamily: "AveriaLibre_400Regular"
    },
    title: {
        fontSize: 26,
        color: colors.text,
        fontFamily: "AveriaLibre_700Bold"
    },
    subTitle: {
        flex: 1,
        fontSize: 20,
        color: colors.text,
        fontFamily: "AveriaLibre_400Regular",
        textAlign: 'left'
    },
    card: {
        width: width * 0.9,
        height: 100,
        borderRadius: 8,
        padding: 8,
        margin: 8,
        backgroundColor: colors.secondary
    },
    shadows: {
        shadowColor: '#111',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    }
});