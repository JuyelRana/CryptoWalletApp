import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {Home, Market, Portfolio, Profile} from "../screens"
import {COLORS, icons} from "../constants"
import {TabBarCustomButton, TabIcon} from "../components/Tabs";
import {connect} from "react-redux";
import {setTradeModalVisibility} from "../store/actions/tab/tabAction";

const Tab = createBottomTabNavigator()

const Tabs = ({setTradeModalVisibility, isTradeModalVisible}) => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 140,
                    // borderTopRightRadius: 20,
                    // borderTopLeftRadius: 20,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}>

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (!isTradeModalVisible) && (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            label="Home"/>
                    )
                }}
                listeners={{
                    tabPress: e => isTradeModalVisible && e.preventDefault()
                }}
                name="Home"
                component={Home}/>

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (!isTradeModalVisible) && (
                        <TabIcon
                            focused={focused}
                            icon={icons.briefcase}
                            label="Portfolio"/>
                    )
                }}
                listeners={{
                    tabPress: e => isTradeModalVisible && e.preventDefault()
                }}
                name="Portfolio"
                component={Portfolio}/>


            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={isTradeModalVisible ? icons.close : icons.trade}
                            iconStyle={isTradeModalVisible ? {
                                width: 15,
                                height: 15
                            } : null}
                            isTrade={true}
                            label="Trade"/>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => setTradeModalVisibility(!isTradeModalVisible)}/>
                    )
                }}
                name="Trade"
                component={Home}/>

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (!isTradeModalVisible) && (
                        <TabIcon
                            focused={focused}
                            icon={icons.market}
                            label="Market"/>
                    )
                }}
                listeners={{
                    tabPress: e => isTradeModalVisible && e.preventDefault()
                }}
                name="Market"
                component={Market}/>


            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (!isTradeModalVisible) && (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                            label="Profile"/>
                    )
                }}
                listeners={{
                    tabPress: e => isTradeModalVisible && e.preventDefault()
                }}
                name="Profile"
                component={Profile}/>
        </Tab.Navigator>
    )
}

const mapStateToProps = store => {
    const {isTradeModalVisible} = store.tabStore;
    return {isTradeModalVisible};
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTradeModalVisibility: (isVisible) => {
            return dispatch(setTradeModalVisibility(isVisible))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
