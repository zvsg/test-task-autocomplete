export const GET_AUTOCOMPLETE_OPTIONS_SUCCESS =
  "GET_AUTOCOMPLETE_OPTIONS_SUCCESS";
export const GET_AUTOCOMPLETE_OPTIONS_FAILED =
  "GET_AUTOCOMPLETE_OPTIONS_FAILED";

export const getAutocompleteOptionsSuccess = data => {
  return {
    type: GET_AUTOCOMPLETE_OPTIONS_SUCCESS,
    data
  };
};

export const getAutocompleteOptionsFailed = error => {
  return {
    type: GET_AUTOCOMPLETE_OPTIONS_FAILED,
    error
  };
};

export const SET_LOADING_FOR_AUTOCOMPLETE_OPTIONS =
  "SET_LOADING_FOR_AUTOCOMPLETE_OPTIONS";
export const setLoading = payload => {
  return { type: SET_LOADING_FOR_AUTOCOMPLETE_OPTIONS, payload };
};

export const changeSearchField = payload => {
  return function(dispatch, getState, api) {
    if (payload.length < 3) {
      dispatch(resetAutocompleteOptions());
      return;
    }

    dispatch(setLoading(true));
    api
      .getAutocompleteOptions(payload)
      .then(data => {
        dispatch(getAutocompleteOptionsSuccess(data));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(getAutocompleteOptionsFailed(error));
        dispatch(setLoading(false));
      });
  };
};

export const RESET_AUTOCOMPLETE_OPTIONS = "RESET_AUTOCOMPLETE_OPTIONS";

export const resetAutocompleteOptions = () => {
  return { type: RESET_AUTOCOMPLETE_OPTIONS };
};

export const SET_ACTIVE_SEARCHED_OPTION_FIELD =
  "SET_ACTIVE_SEARCHED_OPTION_FIELD";

export const setActiveOption = option => {
  return { type: SET_ACTIVE_SEARCHED_OPTION_FIELD, option };
};

export const setActiveAutocompleteOption = option => {
  return function(dispatch) {
    dispatch(resetAutocompleteOptions());
    dispatch(setActiveOption(option));
  };
};
