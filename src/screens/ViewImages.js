import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import LogoCrieTi from '../assets/logo-crie-ti.svg';

const { width } = Dimensions.get('window');

const ViewImages = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>

                <Text>Tela de Imagens</Text>

                <Image
                    style={{width: 200}}
                    resizeMode='contain'
                    source={require('../assets/logo-crie-ti.png')} />

                <Image
                    style={{width: 200, height: 200}}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png'
                    }}/>

                    <LogoCrieTi width={200} height={200} />

            </SafeAreaView>
        </View>
    );
}

export default ViewImages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#A822DB'
    }
});