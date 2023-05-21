import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./styles.module.css";

const Header = () => {
  const testName = "Иван Иванович";
  return (
    <Grid
      alignItems="center"
      justifyContent="end"
      display="flex"
      className={styles.header}
      color="#fff"
    >
      <IconButton color="inherit" aria-label="delete">
        <LogoutIcon />
      </IconButton>
      <Typography mr={2} variant="body1" component="h2">
        {testName}
      </Typography>
    </Grid>
  );
};

export default Header;
