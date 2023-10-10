import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";
const UseReducerExample = () => {
  //   const [dog, setDog] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, dog, error } = state;
  const fetchDog = () => {
    // setLoading(true);
    dispatch({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        // setDog(data.message);
        // setLoading(false);
        dispatch({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        // setError("ERROR!! DATA CAN NOT BE FETCHED");
        // setLoading(false);
        dispatch({ type: "FAIL", payload: "ERROR!! DATA CAN NOT BE FETCHED" });
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="dog" />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseReducerExample;
