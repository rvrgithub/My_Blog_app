import {
  legacy_createStore as createRedux,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as BlogReducer } from "./BlogReducer/reducer";
console.log("reducer",BlogReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ BlogReducer });

export const store = createRedux(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
