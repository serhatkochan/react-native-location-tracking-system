import {SafeAreaView, Text} from "react-native";
import {selectors} from "../../../redux";
import {useSelector} from "react-redux";

const {
    auth: {selectAuthLoading, selectCurrentUser}
} = selectors;
const Home = () => {
    const auth = useSelector(selectCurrentUser);
    return (
        <SafeAreaView>
            <Text>{JSON.stringify(auth, null, 2)}</Text>
        </SafeAreaView>
    );
};

export default Home;