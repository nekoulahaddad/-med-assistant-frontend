import React, { useEffect, useState } from "react";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

import { api } from "../../api/config";
import { endpoints } from "../../api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { handleError, handleLoginIn } from "../../store/reducers/mainSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const Dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useSelector((state: RootState) => state.main);
  let navigate = useNavigate();

  useEffect(() => {
    error && Dispatch(handleError(error));
  }, [error, Dispatch]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    api
      .post(
        endpoints.login,
        {
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        if (result.status === 201) {
          localStorage.setItem("token", result.data.token);
          Dispatch(handleLoginIn(true));
          navigate("upload");
        }
      })
      .catch((error) => {
        setError("Авторизация не удалась");
      });
  };

  return (
    <>
      {error && (
        <Alert
          style={{ margin: "10px" }}
          onClose={() => setError("")}
          severity="error"
        >
          {error}
        </Alert>
      )}
      <Container component={"main"} maxWidth={"xs"}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component={"h1"} variant={"h5"}>
            Авторизация
          </Typography>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#89cff0" }}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
