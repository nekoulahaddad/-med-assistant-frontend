import React from "react";
import styles from "./styles.module.css";
import { Container } from "@mui/material";
import Header from "../Header/Header";

const WrapperCompoenent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="lg">
      <Header />
      <div className={styles.appWrapper}>{children}</div>
    </Container>
  );
};

export default WrapperCompoenent;
