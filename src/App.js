import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./Reducers/Reducer";
import { createStore } from "redux";

const initialState = { tech: "This is very basic example of redux store !! Keep moving" };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />
  }
}

export default App;