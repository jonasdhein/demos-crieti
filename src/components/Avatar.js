import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/Theme';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Avatar = () => {

    const [uriImage, setUriImage] = useState('https://avatars.githubusercontent.com/u/7581786?v=4')

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('IMAGE INFO=>', result);

        if (!result.canceled) {
            //envia um post pro servidor e devolve o link público
            setUriImage(result.assets[0].uri);
        }

    }

    return (
        <Pressable
            onPress={pickImageAsync}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/*<Ionicons name="person-circle-outline" size={80} color={colors.gray} />*/}
            <Image
                style={styles.image}
                source={{ uri: uriImage }} />
        </Pressable>
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