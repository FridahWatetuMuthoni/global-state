# React

## React Notes

## UseReducer

We need to pass the reducer function and the default state to the useReducer hook.
The useReducer hook returns the state and the dispatch function.
Dispatch: dispatch(tpe: 'SOME ACTION')
Then handle it in the reducer function

```javascript
import { data } from "./data";
import { useState, useReducer } from "react";

const defaultState = {
  people: data,
};

const reducer = () => {};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
};

export default Home;
```
