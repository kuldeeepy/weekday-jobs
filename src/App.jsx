import "./App.css";
import CardWrap from "./components/CardWrap.jsx";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div>
      <h2>Hello WeekDay!</h2>
      {<CardWrap />}
      {/* {<Card />} */}
    </div>
  );
}

export default App;
