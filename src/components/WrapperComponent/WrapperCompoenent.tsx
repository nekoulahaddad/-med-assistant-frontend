import React from "react";
import styles from "./styles.module.css";
import { Container } from "@mui/material";
import Header from "../Header/Header";
import LoadingUi from "../LoadingUi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const WrapperCompoenent = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: RootState) => state.main);
  return (
    <Container sx={{ mt: 5 }} maxWidth="lg">
      <Header />
      <div className={styles.appWrapper}>
        {isLoading && <LoadingUi />}
        {children}
      </div>
    </Container>
  );
};

export default WrapperCompoenent;
