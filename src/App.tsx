import React from "react";
import EnhancedTable from "./components/EnhancedTable";
import WrapperCompoenent from "./components/WrapperComponent";
import DragDrop from "./components/DragAndDrop";
import FilterBlock from "./components/FilterBlock"

import "./App.css";

function App() {
  return (
    <div className="App">
      <WrapperCompoenent>
        {/* <DragDrop /> */}
        <FilterBlock />
        <EnhancedTable />
      </WrapperCompoenent>
    </div>
  );
}

export default App;
