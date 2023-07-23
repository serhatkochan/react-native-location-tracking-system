import {useEffect, useState} from "react";
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import * as Location from "expo-location";
import MapView, {Marker} from "react-native-maps";

const App = () => {
    const [locationError, setLocationError] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getLocation();
    }, []);

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <MapView
                    style={styles.map}
                    region={location}
                >
                    {location && <Marker coordinate={location} />}
                </MapView>
            </View>
            <View style={{flex: 1}}>
                <Text>{JSON.stringify(location, null, 2)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default App;