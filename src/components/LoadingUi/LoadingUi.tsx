import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import styles from "./styles.module.css";

const LoadingUi = () => {
  return (
    <div className={styles.loadingWrapper}>
      <Box className={styles.loader} sx={{ display: "flex" }}>
        <CircularProgress color="success" />
      </Box>
    </div>
  );
};

export default LoadingUi;
