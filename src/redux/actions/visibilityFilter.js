import { SET_VISIBILITY_FILTER } from "./types";

export const visibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
