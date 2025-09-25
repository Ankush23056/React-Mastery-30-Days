import React from "react";
import UseReff from "./Components/day8/UseReff";

const Day8 = () => {
  return (
    <div>
      <h3>Day 8- Hooks(useRef, useReducer)</h3>
      <h4>useRef</h4>
      <p>useRef is a hook that allows you to create a mutable reference that persists across re-renders of a component. It can be used to access and manipulate DOM elements directly, store mutable values, and keep track of previous state values without causing re-renders.</p>
      <UseReff />
      <h4>useReducer</h4>
      <p>useReducer is a hook that provides an alternative way to manage state in a React component. It is similar to useState but is more suitable for complex state logic or when the next state depends on the previous state. It takes a reducer function and an initial state as arguments, and returns the current state and a dispatch function to update the state.</p>
    </div>
  );
};

export default Day8;
