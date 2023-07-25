import React, {useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from "react-native";
import {StatusBar} from "expo-status-bar";
import LoginSVG from "../../../assets/images/login.svg";
import {dispatch, actions, selectors} from "../../../src/redux";

const {
    user: {login}
} = actions;
const {
    auth: {selectAuthLoading, selectCurrentUser}
} = selectors;

const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 75) * 46; // Image ratio is 75x46

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({username, password}))
    }
    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaView>
                <LoginSVG {...styles.banner}/>
            </SafeAreaView>

            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        style={[styles.input, styles.inputUsername]}
                        placeholder="Username"
                        placeholderTextColor="#cdcdcf"
                        onChangeText={setUsername}
                    />

                    <TextInput
                        style={[styles.input, styles.inputPassword]}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="#cdcdcf"
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Location Tracking System</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    banner: {
        resizeMode: "contain",
        width: "100%",
        height: bannerHeight,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    content: {
        padding: 22,
    },
    input: {
        borderWidth: 1,
        borderColor: "#cdcdcf",
        color: "#333333",
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15,
    },
    inputUsername: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    inputPassword: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    button: {
        height: 42,
        borderRadius: 6,
        backgroundColor: "#4e7c86",
        justifyContent: "center",
        marginVertical: 15,
    },
    buttonText: {
        color: "#e0e4e8",
        textAlign: "center",
        fontSize: 16,
    },
    footer: {
        alignItems: "center",
        padding: 22,
        paddingBottom: 0,
        marginBottom: 10,
    },
    footerText: {
        textAlign: "center",
    },
});


export default Login;