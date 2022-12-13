import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/Theme';

// import { Container } from './styles';

const Avatar = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/*<Ionicons name="person-circle-outline" size={80} color={colors.gray} />*/}
            <Image
                style={styles.image}
                source={{ uri: 'https://avatars.githubusercontent.com/u/7581786?v=4' }} />
        </View>
    );
}

export default Avatar;

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    }
});