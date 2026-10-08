import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function compteurReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function CompteurAvance() {
  const [state, dispatch] = useReducer(compteurReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "SET_STEP", payload: Number(e.target.value) })}
      />
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default CompteurAvance;  