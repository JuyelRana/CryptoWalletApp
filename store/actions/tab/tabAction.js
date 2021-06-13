import {SET_TRADE_MODAL_VISIBILITY} from "../../types/tab/tabTypes";

export const setTradeModalVisibilitySuccess = (isVisible) => ({
    type: SET_TRADE_MODAL_VISIBILITY,
    payload: {isVisible}
});


export const setTradeModalVisibility = (isVisible) => {
    return dispatch => {
        dispatch(setTradeModalVisibilitySuccess(isVisible))
    }
};
