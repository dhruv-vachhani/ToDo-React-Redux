import { VISIBILITY_FILTER } from "../../constants";
import { SET_FILTER } from "../actionsTypes";

const initialState = VISIBILITY_FILTER.ALL;

export const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
