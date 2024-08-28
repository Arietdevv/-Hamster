import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const add = () => {
    dispatch({ type: "ADD_CASH", payload: 1 });
  };

  const get = () => {
    cash ? dispatch({ type: "GET_CASH", payload: 1 }) : console.log("error");
  };

  return (
    <div id="app">
      <div className="container">
        <div className="app">
          <h1>{cash}</h1>
          <div className="btn">
            <button onClick={add}>Кликай</button>
            <button onClick={get}>Убрать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
