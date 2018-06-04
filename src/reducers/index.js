import { combineReducers } from "redux";

import autocomplete, * as FromAutocomplete from "./autocomplete";

const rootReducer = combineReducers({ autocomplete });

export default rootReducer;

export const getAutocompleteOptions = state =>
    FromAutocomplete.getAutocompleteOptions(state.autocomplete);
export const isAutocompleteOptionsLoading = state =>
    FromAutocomplete.isLoading(state.autocomplete);
export const getSelectedOption = state =>
    FromAutocomplete.getActiveOption(state.autocomplete);
