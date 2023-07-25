import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { FontAwesome5, Ionicons} from "@expo/vector-icons";

const Drawer = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#8200d6'}}>
                <ImageBackground
                    source={require('../../assets/images/menu-bg.jpeg')}
                    style={{padding: 20}}>
                    <Image
                        source={require('../../assets/images/user-profile.jpg')}
                        style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            marginBottom: 5,
                        }}>
                        Serhat Koçhan
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={{
                                color: '#fff',
                                marginRight: 5,
                            }}>
                            Test
                        </Text>
                        <FontAwesome5 name="heart" size={14} color="#fff" />
                    </View>
                </ImageBackground>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Drawer;
