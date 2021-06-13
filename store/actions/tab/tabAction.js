import * as tabTypes from "../../types/tab/tabTypes";

export const setTradeModalVisibilitySuccess = (isVisible) => ({
    type: tabTypes.SET_TRADE_MODAL_VISIBILITY,
    payload: {isVisible}
});


export const setTradeModalVisibility = (isVisible) => {
    return dispatch => {
        dispatch(setTradeModalVisibilitySuccess(isVisible))
    }
};
