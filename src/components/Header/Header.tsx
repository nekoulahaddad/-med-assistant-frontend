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
      <Grid display="flex" ml={2} alignItems="center">
        <Link style={{ display: "flex" }} to="/upload">
          <MedicationLiquidIcon />
        </Link>
        <Link style={{ display: "flex", marginLeft: "10px" }} to="/upload">
          <UploadFileIcon />
          <Typography
            className={styles.linkText}
            variant="body1"
            mt="1px"
            ml="2px"
          >
            Загрузить протокол
          </Typography>
        </Link>
        <Link style={{ display: "flex", marginLeft: "10px" }} to="/files">
          <ListIcon />
          <Typography
            className={styles.linkText}
            variant="body1"
            mt="1px"
            ml="2px"
          >
            Cписок протоколов
          </Typography>
        </Link>
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
