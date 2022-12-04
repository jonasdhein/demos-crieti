
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../styles/Theme';
import { AntDesign } from '@expo/vector-icons';

export default function FloatingButton({icon, onPress, color}){
    return(
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.button, theme.shadows, { backgroundColor: color ? color : '#333' }]}>
            <AntDesign name={icon ? icon : "plus"} size={32} color="#fff" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 64,
        height: 64,
        borderRadius: 50,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        right: 20
    }
});