import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { isIphoneX } from 'react-native-iphone-x-helper';
import Svg, { Path } from 'react-native-svg';
import HomeScreen from "../src/HomeScreen";
import { COLORSS, icons } from "../constants";
import { Login } from "../screens";
import { 
    HomeFill,
    More,
    Notify,
    News,
    Promotions,
    SettingBar,
    SettingBell,
    Wrieting,
 } from "../constants/Icons";
import { TopNews, Notifications, Settings } from "../src";

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, style, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <StatusBar barStyle='light-content' backgroundColor='#28A578' />

                <TouchableOpacity
                    style={{
                        top: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: 5,
                    }}
                    onPress={onPress}
                >                  
                    {children}
                </TouchableOpacity>
                
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    backgroundColor: COLORSS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <BottomTabBar {...props.props} />
            </View>
        )
    } else {
        return (
            <BottomTabBar {...props.props} />
        )
    }
}

const Tabs = () => {
    return (
        
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 80,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                position: 'relative',
                padding: 10,
                borderTopLeftRadius: 20,  
                borderTopRightRadius: 20, 
            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: '400',
                color: '#000'
            }
        }}>
            <Tab.Screen
                name="ໜ້າຫຼັກ"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={HomeFill}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? "#28A578" : "#BCBEC0"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ຂ່າວສານ"
                component={TopNews}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={More}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? "#28A578" : "#BCBEC0"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ແຈ້ງເຕືອນ"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Notify}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? "#28A578" : "#BCBEC0"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ຕັ້ງຄ່າ"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={SettingBell}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? "#28A578" : "#BCBEC0"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props} 
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#28A578",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;