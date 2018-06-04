/**
 * Returns reducer function, which responsible for loading.
 * @param suffix - Unique suffix for actions.
 * @param {boolean} initialState - Initial reducer state.
 * @returns {Function} - reducer function.
 */
export const createLoadingReducer = (suffix = "", initialState = false) => {
    return (state = initialState, action) => {
        const { type, payload = {} } = action;

        switch (type) {
            case `SET_LOADING_FOR_${suffix}`:
                return payload;

            case `RESET_LOADING_FOR_${suffix}`:
                return initialState;

            default:
                return state;
        }
    };
};
