import React, { useEffect } from "react";
import WrapperCompoenent from "./components/WrapperComponent";
import { useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <div className="App">
      <Header />
      <WrapperCompoenent>
        <Outlet />
      </WrapperCompoenent>
      <div style={{ height: "50px" }} />
      <Footer />
    </div>
  );
}

export default App;
