export const FIND_CITY = "FIND_CITY";
import axios from "axios";

export const fetchCity = (value) => {
  return (dispatch) => {
    if (value.length > 2) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api-adresse.data.gouv.fr/search/?q=${value}&limit=6&type=municipality&autocomplete=1`
        )
        .then((response) => {
          console.log(response.data.features);
          dispatch({
            type: FIND_CITY,
            payload: response.data.features,
          });
        })
        .catch((error) => {
          console.log("no data");
          dispatch({
            type: FIND_CITY,
            payload: [],
          });
        });
    } else {
      dispatch({
        type: FIND_CITY,
        payload: [],
      });
    }
  };
};
