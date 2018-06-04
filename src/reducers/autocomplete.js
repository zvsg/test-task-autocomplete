import { combineReducers } from "redux";
import {
  GET_AUTOCOMPLETE_OPTIONS_SUCCESS,
  GET_AUTOCOMPLETE_OPTIONS_FAILED,
  SET_ACTIVE_SEARCHED_OPTION_FIELD,
  RESET_AUTOCOMPLETE_OPTIONS
} from "../actions/autocomplete";
import { createLoadingReducer } from "../HOR/loading";

const neededValues = [
  "artistName",
  "collectionName",
  "trackName",
  "artworkUrl30",
  "artworkUrl100",
  "trackId",
  "collectionPrice",
  "currency"
];

const autocompleteOptionsReducer = (state = [], action) => {
  switch (action.type) {
    case RESET_AUTOCOMPLETE_OPTIONS:
      return [];
    case GET_AUTOCOMPLETE_OPTIONS_SUCCESS:
      return action.data.map(item => {
        return Object.keys(item).reduce((p, c) => {
          if (neededValues.indexOf(c) !== -1) p[c] = item[c];
          return p;
        }, {});
      });
    case GET_AUTOCOMPLETE_OPTIONS_FAILED:
    default:
      return state;
  }
};

const selectOptionsReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_SEARCHED_OPTION_FIELD:
      return action.option;
    default:
      return state;
  }
};

const autocompleteReducer = combineReducers({
  autocompleteOptions: autocompleteOptionsReducer,
  activeOption: selectOptionsReducer,
  isLoading: createLoadingReducer("AUTOCOMPLETE_OPTIONS", false)
});

export default autocompleteReducer;

export const getActiveOption = state => state.activeOption;
export const getAutocompleteOptions = state => state.autocompleteOptions;
export const isLoading = state => state.isLoading;
