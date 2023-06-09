import React from "react";
import styles from "./styles.module.css";
import { Container } from "@mui/material";
import LoadingUi from "../LoadingUi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const WrapperComponent = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: RootState) => state.main);
  return (
    <Container sx={{ mt: 5 }} maxWidth="lg">
      <div className={styles.appWrapper}>
        {isLoading && <LoadingUi />}
        {children}
      </div>
    </Container>
  );
};

export default WrapperComponent;
