import React, { useEffect } from "react";
import WrapperCompoenent from "./components/WrapperComponent";
import { useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { clearError } from "./store/reducers/mainSlice";

function App() {
  let navigate = useNavigate();
  const Dispatch = useDispatch<AppDispatch>();
  const { isError } = useSelector((state: RootState) => state.main);
  useEffect(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <div className="App">
      <Header />
      {isError && (
        <Alert
          style={{ margin: "10px" }}
          onClose={() => Dispatch(clearError())}
          severity="error"
        >
          Техническая Ошибка попробуйте ещё раз!
        </Alert>
      )}
      <WrapperCompoenent>
        <Outlet />
      </WrapperCompoenent>
      <div style={{ height: "50px" }} />
      <Footer />
    </div>
  );
}

export default App;
