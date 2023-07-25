import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import LocationTest from '../screens/location-test';

import { FontAwesome5, Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="LocationTest"
                component={LocationTest}
                options={({route}) => ({
                    title: route.params?.title,
                })}
            />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {backgroundColor: '#AD40AF'},
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'yellow',
            }}>
            <Tab.Screen
                name="Home2"
                component={HomeStack}
                options={({route}) => ({
                    tabBarStyle: {
                        display: "flex",
                        backgroundColor: '#AD40AF',
                    },
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};
export default TabNavigator;
