
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../styles/Theme';

export default function CustomButton({label, onPress, backgroundColor, textColor, width}){
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={[theme.button, theme.shadows, { backgroundColor: backgroundColor, width: width ? width : '80%' }]}>
            <Text style={[theme.textButton, { color: textColor }]}>{label}</Text>
        </TouchableOpacity>
    )
}