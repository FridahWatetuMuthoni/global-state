import UseGlobalContext from "./hooks/UseGlobalContext";
import { data } from "./data";
import { useReducer } from "react";
import "./App.css";
import reducer from "./reducers/reducer";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./reducers/actions";

const defaultState = {
  people: data,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const values = UseGlobalContext();
  console.log(values);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const handleReset = () => {
    dispatch({ type: RESET_LIST });
  };
  return (
    <section className="container d-flex align-items-center justify-content-center flex-column ">
      <section className="text-center ">
        {state.people.map((person) => {
          const { id, name } = person;

          return (
            <section className="shadow-lg p-4 mb-2 rounded name" key={id}>
              <h4>{name}</h4>

              <button
                onClick={() => removeItem(id)}
                className="btn btn-primary"
              >
                Remove
              </button>
            </section>
          );
        })}
      </section>

      <section className="text-center mt-4">
        {state.people.length > 0 ? (
          <button className="btn btn-success" onClick={clearList}>
            Clear
          </button>
        ) : (
          <button className="btn btn-success" onClick={handleReset}>
            Reset
          </button>
        )}
      </section>
    </section>
  );
}

export default App;
