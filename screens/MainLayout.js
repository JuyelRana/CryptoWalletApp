import React, {useEffect, useRef} from 'react';
import {View, Animated} from "react-native";
import {setTradeModalVisibility} from "../store/actions/tab/tabAction";
import {connect} from "react-redux";
import {COLORS, icons, SIZES} from "../constants";
import {IconTextButton} from "../components/Tabs";

const MainLayout = ({children, isTradeModalVisible}) => {

    const modalAnimationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        if (isTradeModalVisible) {
            Animated.timing(modalAnimationValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimationValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        }

    }, [isTradeModalVisible]);

    const modalY = modalAnimationValue.interpolate({
        inputRange:[0, 1],
        outputRange: [SIZES.height, SIZES.height - 280]
    })

    return (
        <View style={{
            flex: 1
        }}>
            {children}

            {/*Dim Background */}
            <Animated.View style={{
                position:'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom:0,
                backgroundColor:COLORS.transparentBlack
            }} opacity={modalAnimationValue}/>


            {/*Modal */}
            <Animated.View style={{
                position: 'absolute',
                left: 0,
                top: modalY,
                width: "100%",
                padding: SIZES.padding,
                backgroundColor: COLORS.primary
            }}>
                <IconTextButton
                    label="Transfer"
                    icon={icons.send}
                    onPress={() => console.log("Transfer")}/>
                <IconTextButton
                    containerStyle={{
                        marginTop: SIZES.base
                    }}
                    label="Withdraw"
                    icon={icons.withdraw}
                    onPress={() => console.log("Withdraw")}
                />
            </Animated.View>
        </View>
    );
};

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


export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
