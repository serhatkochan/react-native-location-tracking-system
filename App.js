import {useEffect, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import * as Location from "expo-location";

const App = () => {
    const [locationError, setLocationError] = useState(null);
    const [location, setLocation] = useState({lat: null, lon: null});

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
            setLocation({lat: location.coords.latitude, lon: location.coords.longitude});
        } catch (error) {
            console.error("Error requesting location permission:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>{location.lat} - {location.lon}</Text>
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;