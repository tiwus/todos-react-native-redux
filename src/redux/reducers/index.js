import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import text_reducer from "./text_reducer";

const rootReducers = combineReducers({
  todos,
  visibilityFilter,
  text_reducer
});

export default rootReducers;
