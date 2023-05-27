import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ListIcon from "@mui/icons-material/List";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const testName = "Иван Иванович";
  return (
    <Grid
      justifyContent="space-between"
      display="flex"
      alignItems="center"
      className={styles.header}
      color="#fff"
    >
      <Grid display="flex" alignItems="center">
        <IconButton color="inherit" aria-label="delete">
          <Link to="/upload">
            <MedicationLiquidIcon />
          </Link>
        </IconButton>
        <IconButton color="inherit" aria-label="delete">
          <Link to="/upload">
            <UploadFileIcon />
          </Link>
        </IconButton>
        <IconButton color="inherit" aria-label="delete">
          <Link to="/files">
            <ListIcon />
          </Link>
        </IconButton>
      </Grid>
      <Grid display="flex" alignItems="center">
        <IconButton color="inherit" aria-label="delete">
          <LogoutIcon />
        </IconButton>
        <Typography mr={2} variant="body1" component="h2">
          {testName}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
