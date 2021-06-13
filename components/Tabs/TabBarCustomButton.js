import React from 'react';
import {TouchableOpacity, View} from "react-native";

const TabBarCustomButton = ({children, onPress}) => {
    return (
        <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

export default TabBarCustomButton;
