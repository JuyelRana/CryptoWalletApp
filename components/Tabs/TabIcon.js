import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS} from "../../constants";

const TabIcon = ({focused, icon, iconStyle, label, isTrade}) => {


    return isTrade ?
        (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.black
            }}>

                <Image
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white,
                        ...iconStyle
                    }}
                    source={icon}
                    resizeMode='contain'/>

                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4
                    }}>
                    {label}
                </Text>
            </View>
        ) : (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary,
                        ...iconStyle
                    }}
                    source={icon}
                    resizeMode='contain'/>

                <Text style={{
                    color: focused ? COLORS.white : COLORS.secondary,
                    ...FONTS.h4
                }}>
                    {label}
                </Text>

            </View>
        );
};

export default TabIcon;
