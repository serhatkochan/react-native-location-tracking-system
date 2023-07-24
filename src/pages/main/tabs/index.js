import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../home/Home";
import Settings from "../settings";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{headerShown: false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default Tabs;