import React from "react";
import WrapperComponent from "./components/WrapperComponent";
import DragDrop from "./components/DragAndDrop";
import FilterBlock from "./components/FilterBlock";

import "./App.css";

let isLogin = false

function App() {
  return (
    <div className="App">
      <WrapperComponent isLogin={isLogin}>
        {/* <DragDrop /> */}
        <FilterBlock />
      </WrapperComponent>
    </div>
  );
}

export default App;
