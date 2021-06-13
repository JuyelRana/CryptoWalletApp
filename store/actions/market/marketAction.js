import * as  marketTypes from "../../types/market/marketTypes";
import axios from "axios";

// Holding / My Holdings
export const getHoldingsBegin = () => ({
    type: marketTypes.GET_HOLDING_BEGIN
});

export const getHoldingsSuccess = (myHoldings) => ({
    type: marketTypes.GET_HOLDING_SUCCESS,
    payload: {myHoldings}
});

export const getHoldingFailure = (error) => ({
    type: marketTypes.GET_HOLDING_FAILURE,
    payload: {error}
});

export const getHoldings = (
    holdings = [],
    currency = "usd",
    orderBy = "market_cap_desc",
    sparkline = true,
    priceChangePerc = "7d",
    perPage = 10,
    page = 1) => {

    return dispatch => {
        dispatch(getHoldingsBegin())

        let ids = holdings.map((item) => {
            return item.id
        }).join(",")

        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`;

        return axios.get(apiUrl).then((response) => {
            if (response.status === 200) {
                // Message Data
                let myHoldings = response.data.map((item) => {

                    // Retrieve our currency holdings -> current quantity
                    let coin = holdings.find(a => a.id === item.id);

                    // Price from 7 days ago
                    let price7d = item.current_price / (1 + item.price_change_percentage_7d_in_currency * 0.01)

                    return {
                        id: item.id,
                        symbol: item.symbol,
                        name: item.name,
                        image: item.image,
                        current_price: item.current_price,
                        qty: coin.qty,
                        total: coin.qty * item.current_price,
                        price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
                        holding_value_change_7d: (item.current_price - price7d) * coin.qty,
                        sparkline_in_7d: {
                            value: item.sparkline_in_7d.price.map((price) => {
                                return price * coin.qty
                            })
                        }
                    }
                });
                dispatch(getHoldingsSuccess(myHoldings));

            } else {
                dispatch(getHoldingFailure(response.data));
            }
        }).catch((error) => {
            dispatch(getHoldingFailure(error));
        })

    }
};


// Coin Market

export const getCoinMarketBegin = () => ({
    type: marketTypes.GET_COIN_MARKET_BEGIN
});

export const getCoinMarketSuccess = (coins) => ({
    type: marketTypes.GET_COIN_MARKET_SUCCESS,
    payload: {coins}
});

export const getCoinMarketFailure = (error) => ({
    type: marketTypes.GET_COIN_MARKET_FAILURE,
    payload: {error}
});

export const getCoinMarket = (
    currency = "usd",
    orderBy = "market_cap_desc",
    sparkline = true,
    priceChangePerc = "7d",
    perPage = 10,
    page = 1) => {
    return dispatch => {
        dispatch(getCoinMarketBegin())

        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`

        return axios.get(apiUrl).then((response) => {
            if (response.status === 200) {
                dispatch(getCoinMarketSuccess(response.data))
            } else {
                dispatch(getCoinMarketFailure(response.data));
            }
        }).catch((error) => dispatch(getCoinMarketFailure(error)));
    }
}
