import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import api from "../data-provider";

// REDUX DEVTOOLS
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(api))
);

const store = createStore(rootReducer, enhancer);

export default store;
