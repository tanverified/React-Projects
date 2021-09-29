import { INCREASE, DECREASE, RESET } from "./actions";

const defaultState = {
  count: 0,
  name: "John",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default reducer;
