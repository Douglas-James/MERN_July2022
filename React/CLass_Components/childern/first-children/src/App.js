import React from "react";
// import style
import "./App.css";
import MyNewComponent from "./Component/MyNewComponent";

function App() {
  return (
    <div className="App">
      <div className="test">
      <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
        <button className="btn btn-success">CDN</button>
      </MyNewComponent>
      </div>
    </div>
  );
}

export default App;
