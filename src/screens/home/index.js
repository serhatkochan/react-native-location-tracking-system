import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', marginTop: 20}}>
            <ScrollView style={{padding: 20}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}>
                    <Text style={{fontSize: 18}}>
                        Serhat Test 1 2 3
                    </Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require('../../../assets/images/user-profile.jpg')}
                            style={{width: 35, height: 35}}
                            imageStyle={{borderRadius: 25}}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>
                        Content
                    </Text>
                </View>
            </ScrollView>
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