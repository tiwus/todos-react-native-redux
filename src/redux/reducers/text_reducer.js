import { CHANGED_TEXT } from "../actions/types";

const initialState = '';

const text_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_TEXT:
      return state = action.text;
    default:
      return state;
  }
};

export default text_reducer;
