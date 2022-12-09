import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/Theme';

// import { Container } from './styles';

const Avatar = () => {
    return (
        <View>
            <Ionicons name="person-circle-outline" size={80} color={colors.gray} />
        </View>
    );
}

export default Avatar;