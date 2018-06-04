import { connect } from "react-redux";
import {
  getAutocompleteOptions,
  isAutocompleteOptionsLoading,
  getSelectedOption
} from "../reducers";
import {changeSearchField, resetAutocompleteOptions, setActiveAutocompleteOption} from "../actions/autocomplete";

import SearchAutocomplete from "../components/SearchAutocomplete";

const mapStateToProps = state => ({
  autocompleteOptions: getAutocompleteOptions(state),
  isLoading: isAutocompleteOptionsLoading(state),
  selectedOption: getSelectedOption(state),
  resetAutocompleteOptions: resetAutocompleteOptions()
});

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeSearchField(payload)),
    onSelectOption: payload => dispatch(setActiveAutocompleteOption(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAutocomplete);
