
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { colors, theme } from '../styles/Theme';

import * as Location from 'expo-location';

const ViewMap = () => {

    const [region, setRegion] = useState({
        latitude: 100,
        longitude: -33,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            //setLocation(location);
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
            console.log('Location=>', location.coords);
        })();
    }, []);


    return (
        <View style={theme.container}>
            <MapView
                provider='google'
                style={styles.map}
                onMapReady={() => setIsReady(true)}
                initialRegion={region}
                region={{
                    latitude: region.latitude,
                    longitude: region.longitude
                }}
            >
                {isReady &&
                    <Marker
                        draggable
                        coordinate={{ latitude: -29.44542, longitude: -51.95465 }}
                        title="UNIVATES"
                        description="Crie-ti"
                        image={require('../assets/logo_mapa.png')}
                        onDragEnd={(e) => console.log('COORDENADAS=>', e.nativeEvent.coordinate)}
                    />
                }
            </MapView>

            <StatusBar
                translucent={false}
                backgroundColor={colors.background}
                style="dark" />

        </View>
    );
}

export default ViewMap;

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});