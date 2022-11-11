
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({label, onPress}){
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        height: 42,
        borderRadius: 8,
        padding: 8,
    },
    textButton: {
        color: '#9400d3',
        fontSize: 24,
        textAlign: 'center',
    }
});