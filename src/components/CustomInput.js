import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { colors, theme } from '../styles/Theme';

const CustomInput = ({ keyboardType, value, onChangeText, placeholder, password, iconName }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.inputArea}>
            <View style={styles.inputLeft}>
                <MaterialIcons name={iconName} size={28} color={colors.primary} />
                <TextInput
                    keyboardType={keyboardType}
                    autoCapitalize='none'
                    placeholderTextColor={colors.placeholder}
                    value={value}
                    style={styles.inputText}
                    onChangeText={onChangeText}
                    secureTextEntry={password && !showPassword}
                    placeholder={placeholder} />
            </View>
            {password &&
                <TouchableOpacity
                    style={styles.password}
                    onPress={() => handlePassword()}>
                    <Feather name={showPassword ? "eye-off" : "eye"} size={18} color={colors.primary} />
                </TouchableOpacity>
            }
        </View>
    );
}

export default CustomInput;

const styles = StyleSheet.create({
    inputArea: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        height: 42,
        borderRadius: 8,
        width: '100%',
        justifyContent: 'flex-start',
        paddingLeft: 8,
        marginBottom: 16,
    },
    inputLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    password: {
        paddingRight: 8
    },
    inputText: {
        color: colors.text,
        paddingLeft: 8,
        fontSize: 14,
        fontFamily: "AveriaLibre_300Light"
    }
});