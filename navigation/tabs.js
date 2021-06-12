import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {Home, Portfolio, Market, Profile} from "../screens"
import {COLORS, icons} from "../constants"
import {TabIcon} from "../components/Tabs";

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 140,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}>

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            label="Home"/>
                    )
                }}
                name="Home"
                component={Home}/>

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.briefcase}
                            label="Portfolio"/>
                    )
                }}
                name="Portfolio"
                component={Portfolio}/>


            <Tab.Screen

                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.trade}
                            isTrade={true}
                            label="Trade"/>
                    )
                }}

                name="Trade"
                component={Home}/>

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.market}
                            label="Market"/>
                    )
                }}
                name="Market"
                component={Market}/>


            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                            label="Profile"/>
                    )
                }}
                name="Profile"
                component={Profile}/>
        </Tab.Navigator>
    )
}

export default Tabs;
