import { FIND_CITY } from "../actions/geoLocalisation.action";

const initialState = {
  selectedCity: {},
  inputSearchResult: [],
};
export const cityLocation = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CITY:
      return {
        ...state,
        inputSearchResult: action.payload,
      };

    case "REMOVE_CITY":
      return state.filter((city) => city !== action.city);
    default:
      return state;
  }
};
