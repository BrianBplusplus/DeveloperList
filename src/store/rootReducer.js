import { combineReducers } from "redux";
import fetchDeveloper from "./developers/reducer";
import havingFunReducer from "./developers/havingFunReducer";

export default combineReducers({
  havingFun: havingFunReducer,
  developers: fetchDeveloper
  // we can add more "slice" subreducers here later on...
});
