import { data } from "../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const reducer = (state, action) => {
  const { type, payload } = action;
  let updatedPeople;
  switch (type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case REMOVE_ITEM:
      updatedPeople = state.people.filter((person) => person.id !== payload.id);
      return { ...state, people: updatedPeople };
    case RESET_LIST:
      return { ...state, people: data };
  }
  throw new Error(`No matching ${action.type}`);
};

export default reducer;
