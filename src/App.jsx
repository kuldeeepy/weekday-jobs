import { createContext, useState } from "react";
import "./App.css";
import Wrapper from "./components/Container/Wrapper.jsx";
import Filter from "./components/Filter/Filter";
import Modal from "./components/Modal/Modal.jsx";

export const SharedStateContext = createContext();

function App() {
  const [state, setState] = useState({
    role: "All",
    search: "",
    experience: 0,
    type: "",
    salary: "",
  });

  return (
    <SharedStateContext.Provider value={{ state, setState }}>
      <Filter />
      <Wrapper />
      <Modal />
    </SharedStateContext.Provider>
  );
}

export default App;
