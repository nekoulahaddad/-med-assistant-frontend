import React from "react";
import EnhancedTable from "./components/EnhancedTable";
import WrapperCompoenent from "./components/WrapperComponent";
import DragDrop from "./components/DragAndDrop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WrapperCompoenent>
        <DragDrop />
        {/* <EnhancedTable /> */}
      </WrapperCompoenent>
    </div>
  );
}

export default App;
