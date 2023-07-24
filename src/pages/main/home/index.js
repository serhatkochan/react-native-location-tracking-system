import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {selectors, actions, dispatch} from "../../../redux";

const {
    user: {logout}
} = actions;
const {
    auth: {selectAuthLoading, selectCurrentUser}
} = selectors;
const Home = () => {
    const auth = useSelector(selectCurrentUser);

    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <SafeAreaView>
            <Text>{JSON.stringify(auth, null, 2)}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 42,
        borderRadius: 6,
        backgroundColor: "#4e7c86",
        justifyContent: "center",
        marginVertical: 15,
    },
})

export default Home;