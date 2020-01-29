import { combineReducers } from "redux";
import reducer from "./developers/reducer";
import havingFunReducer from "./developers/havingFunReducer";

export default combineReducers({
  havingFun: havingFunReducer,
  developers: reducer
  // we can add more "slice" subreducers here later on...
});
