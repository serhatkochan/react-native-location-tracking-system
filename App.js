import { Provider } from 'react-redux';
import store from './src/redux/store'

import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";

const App = () => {
    return (
        <Provider store={store}>
                <NavigationContainer>
                    <AuthStack />
                </NavigationContainer>
        </Provider>
    );
};
export default App;