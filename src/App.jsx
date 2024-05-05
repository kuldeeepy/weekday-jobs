import { createContext, useState } from "react";
import "./App.css";
import Wrapper from "./components/Container/Wrapper.jsx";
import Filter from "./components/Filter/Filter";

export const SharedStateContext = createContext();

function App() {
  const [state, setState] = useState({
    role: "All",
    search: "",
    experience: "",
    type: "",
    salary: "",
  });

  return (
    <SharedStateContext.Provider value={{ state, setState }}>
      <Filter />
      <Wrapper />
    </SharedStateContext.Provider>
  );
}

export default App;
