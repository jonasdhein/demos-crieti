import React, { useState } from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// import { Container } from './styles';

const ViewMaps1 = () => {


    const [isMapReady, setIsMapReady] = useState(false);

    return (
        <View>
            <MapView
                provider="google"
                mapType="standard"
                onMapReady={() => setIsMapReady(true)}
                /*initialRegion={{
                    latitude:  -29.200,
                    longitude:  -51.8324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}*/
                style={{ width: '100%', height: 300 }}>
                {isMapReady &&
                    <Marker
                        coordinate={{ latitude: parseFloat(-29.200), longitude: parseFloat(-51.8324) }}
                        title={'CRIE-TI'}
                        description={'Posição no mapa'}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/logo.png')} style={{ width: 34, height: 34 }} />
                        </View>
                    </Marker>
                }
            </MapView>
        </View>
    );
}

export default ViewMaps1;