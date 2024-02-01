import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity } from "../actions/geoLocalisation.action";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.cityLocation.inputSearchResult);
  let [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    dispatch(fetchCity(e.target.value));
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <div>
        {searchValue &&
          searchValue.length > 0 &&
          searchValue.map((city, index) => {
            return (
              <div key={index}>
                <p>{city?.properties.label}</p>
                <p>{city.properties.postcode}</p>
              </div>
            );
          })}
        {searchValue && inputValue.length > 0 && searchValue.length === 0 && (
          <div>
            <p>...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
