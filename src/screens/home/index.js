import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {selectors, actions, dispatch} from "../../redux";

const {
    user: {logout}
} = actions;
const {
    auth: {selectAuthLoading, selectCurrentUser}
} = selectors;
const Home = ({navigation}) => {
    const auth = useSelector(selectCurrentUser);

    const handleLogout = () => {
        dispatch(logout());
    }
    const handleNavigate = () => {
        navigation.navigate('LocationTest', {customState: 'hehe'});
    }
    return (
        <SafeAreaView style={{marginTop: 50}}>
            <Text>{JSON.stringify(auth, null, 2)}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNavigate}>
                <Text>Go to Location Test</Text>
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