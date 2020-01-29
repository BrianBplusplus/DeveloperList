const initialState = "yes";
export default function havingFunReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
