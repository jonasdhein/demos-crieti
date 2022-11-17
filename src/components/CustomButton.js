
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({label, onPress, backgroundColor, textColor}){
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.button, styles.shadows, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.textButton, { color: textColor }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        height: 48,
        width: '100%',
        marginTop: 16,
        borderRadius: 8,
        padding: 8,
    },
    textButton: {
        color: '#9400d3',
        fontSize: 24,
        textAlign: 'center',
    },
    shadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5
    }
});