import "./App.css";
import { configureStore } from "@reduxjs/toolkit";

//redux
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import SearchInput from "./components/searchInput";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

function App() {
  return (
    <Provider store={store}>
      <div>
        <SearchInput />
      </div>
    </Provider>
  );
}

export default App;
