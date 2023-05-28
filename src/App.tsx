import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { clearError } from "./store/reducers/mainSlice";
import WrapperComponent from "./components/WrapperComponent";

function App() {
  let navigate = useNavigate();
  const Dispatch = useDispatch<AppDispatch>();
  const { isError, errorMessage } = useSelector(
    (state: RootState) => state.main
  );
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
          {errorMessage
            ? errorMessage
            : "Техническая Ошибка попробуйте ещё раз!"}
        </Alert>
      )}
      <WrapperComponent>
        <Outlet />
      </WrapperComponent>
      <div style={{ height: "50px" }} />
    </div>
  );
}

export default App;
