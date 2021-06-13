import * as  marketTypes from "../../types/market/marketTypes";

const initialState = {
    myHoldings: [],
    coins: [],
    error: '',
    loading: false
}

const marketReducer = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {

        case marketTypes.GET_HOLDING_BEGIN: {
            return {
                ...state,
                loading: true
            }
        }

        case marketTypes.GET_HOLDING_SUCCESS: {
            return {
                ...state,
                myHoldings: payload.myHoldings,
                loading: false
            }
        }

        case marketTypes.GET_HOLDING_FAILURE: {
            return {
                ...state,
                error: payload.error,
                loading: false
            }
        }

        case marketTypes.GET_COIN_MARKET_BEGIN: {
            return {
                ...state,
                loading: true
            }
        }

        case marketTypes.GET_COIN_MARKET_SUCCESS: {
            return {
                ...state,
                coins: payload.coins,
                loading: false
            }
        }

        case marketTypes.GET_COIN_MARKET_FAILURE: {
            return {
                ...state,
                error: payload.error,
                loading: false
            }
        }

        default:
            return state
    }
}

export default marketReducer;
