import React from "react";
import "./styles.css";
import Form from "./Form.js";
// import GroceryItems from "./GroceryItems.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <br />

        {/* <GroceryItems props=this.state./> */}
      </div>
    );
  }
}

export default App;
