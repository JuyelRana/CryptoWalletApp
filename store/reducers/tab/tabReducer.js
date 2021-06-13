import * as tabTypes from "../../types/tab/tabTypes";

const initialState = {
    isTradeModalVisible: false
}


const tabReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case tabTypes.SET_TRADE_MODAL_VISIBILITY: {
            return {
                ...state,
                isTradeModalVisible: payload.isVisible
            }
        }

        default:
            return state;
    }
}

export default tabReducer;
