import {Provider} from 'react-redux';
import store from './src/redux/store'

import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import 'react-native-get-random-values';
import { TextEncoder, TextDecoder } from 'text-encoding';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {/*<AuthStack/>*/}
                <AppStack />
            </NavigationContainer>
        </Provider>
    );
};
export default App;