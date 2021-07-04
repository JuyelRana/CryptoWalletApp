import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {MainLayout} from "./";
import {connect} from "react-redux";
import {getCoinMarket, getHoldings} from "../store/actions/market/marketAction";
import {holdings} from "../constants/dummy";
import {useFocusEffect} from "@react-navigation/native";
import {COLORS} from "../constants";

const Home = ({getHoldings, getCoinMarket, myHoldings, coins}) => {

    useFocusEffect(
        useCallback(() => {
            getHoldings(holdings);
            //getCoinMarket();
            // console.log("useFocusEffect");
            // console.log(myHoldings);
            // console.log(coins);
        }, [])
    )

    console.log(myHoldings);

    return (
        <MainLayout>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black
            }}>

                {/*Header - Wallet Info*/}



                {/*Chart */}

                {/*Top Cryptocurrency */}
            </View>
        </MainLayout>
    )
}

const mapStateToProps = store => {
    const {myHoldings, coins} = store.marketStore;
    return {myHoldings, coins};
}


const mapDispatchToProps = (dispatch) => {
    return {
        getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getHoldings(holdings, currency, orderBy, sparkline, priceChangePerc, perPage, page))
        },
        getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getCoinMarket(currency, coinList, orderBy, priceChangePerc, perPage, page))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
