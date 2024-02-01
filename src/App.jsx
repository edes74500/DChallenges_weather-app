import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";

//redux
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./reducers";
import { fetchCity } from "./actions/geoLocalisation.action";
import SearchInput from "./components/searchInput";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <SearchInput />
      </div>
    </Provider>
  );
}

export default App;
