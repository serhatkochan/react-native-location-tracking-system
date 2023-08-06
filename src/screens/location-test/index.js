import {useEffect, useState} from "react";
import {StyleSheet, Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import * as Location from "expo-location";
import MapView, {Marker} from "react-native-maps";
import { Client } from '@stomp/stompjs';
import {WebSocketConfig} from "../../environment/dev";

const LocationTest = () => {
    const [locationError, setLocationError] = useState(null);
    const [location, setLocation] = useState(null);
    const [socket, setSocket] = useState(null);

    const [socketData, setSocketData] = useState([]);
    let wsData = {};

    useEffect(() => {
        const client = new Client({
            brokerURL: WebSocketConfig.websocket,
        });
        setSocket(client);

        client.onConnect = (frame) => {
            client.subscribe(WebSocketConfig.canTopic, (message) => {
                const {unitId, lat, lon, speed, status} = JSON.parse(message.body);
                if (unitId) {
                    wsData = {
                        ...wsData,
                        [unitId]: {
                            unitId: unitId,
                            lat: lat,
                            lon: lon,
                            speed: speed,
                            status: status,
                        }
                    }
                }
            });
        };
        socketBuffer();

        client.activate();

        return () => {
            client.deactivate();
        };
    }, []);

    useEffect(() => {
        // getLocation();
    }, []);

    const socketBuffer = () => {
        setTimeout(() => {
            setSocketData(Object.values(wsData));
            socketBuffer();
        }, 2000);
    }

    const getLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                setLocationError("Location permission denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({...location.coords, latitudeDelta: 0, longitudeDelta: 0.001});
        } catch (error) {
            console.error("Error requesting location permission:", error);
        }
    };

    console.log(socketData);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <MapView
                    style={styles.map}
                    region={location}
                >
                    {location && <Marker coordinate={location} />}
                    {
                        socketData.map((item, index) => (
                            <Marker
                                key={`${index}_LOCATION`}
                                coordinate={{latitude: item.lat, longitude: item.lon, latitudeDelta: 0, longitudeDelta: 0.001}}
                            />
                        ))
                    }
                </MapView>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => socket.deactivate()} style={{padding: 20, backgroundColor: 'red'}}>
                    <Text>
                        Socketi Kapat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => socket.activate()} style={{padding: 20, backgroundColor: 'green'}}>
                    <Text>
                        Socketi Aç
                    </Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(location, null, 2)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default LocationTest;