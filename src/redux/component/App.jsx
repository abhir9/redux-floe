import List from "./List";
import Form from "./Form";
import React, { Component } from "react";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Notes: </h1>
        <List />
        <h2>Add a note</h2>
        <Form />
      </div>
    );
  }
}

export default App;
