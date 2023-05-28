import React, { useMemo, useState } from "react";

import { Grid, TextField, Autocomplete, Button } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useParams } from "react-router-dom";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import styles from "./styles.module.css";
import { TReport } from "../../types/main";
import { startAnalysis } from "../../store/reducers/mainSlice";
import DataTable from "../DataTable";
import ClearAllIcon from "@mui/icons-material/ClearAll";
const FilterBlock = () => {
  const { reports } = useSelector((state: RootState) => state.main);
  const [doctor, setDoctor] = useState("");
  const [appointments, setAppointments] = useState("");

  const { fileId } = useParams();
  const Dispatch = useDispatch<AppDispatch>();

  const report: TReport | null = useMemo(() => {
    return reports.filter((report) => report.fileId === fileId)?.at(0) || null;
  }, [fileId, reports]);

  const clearFilters = () => {
    setDoctor("");
    setAppointments("");
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        gap={2}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{ backgroundColor: "#fff", paddingY: "1rem" }}
      >
        <Grid item md={5} xs={10}>
          <Autocomplete
            onInputChange={(event, value) => {
              setDoctor(value);
            }}
            value={doctor}
            disablePortal
            size="small"
            id="department"
            options={report?.filters?.diagnosis || []}
            renderInput={(params) => (
              <TextField {...params} label="Должность" />
            )}
          />
        </Grid>
        <Grid item md={5} xs={10}>
          <Autocomplete
            onInputChange={(event, value) => {
              setAppointments(value);
            }}
            disablePortal
            value={appointments}
            size="small"
            id="department"
            options={report?.filters?.doctors || []}
            renderInput={(params) => <TextField {...params} label="Диагноз" />}
          />
        </Grid>
        <Grid
          className={styles.analyzeButton}
          display="flex"
          item
          md={5}
          xs={10}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#89cff0", width: "100%" }}
            endIcon={<QueryStatsIcon />}
            onClick={() =>
              Dispatch(
                startAnalysis({
                  fileId: fileId,
                  filters: {
                    doctor: doctor ? [doctor] : [],
                    code: appointments ? [appointments] : [],
                  },
                })
              )
            }
          >
            Начать анализ
          </Button>
        </Grid>
        <Grid
          className={styles.analyzeButton}
          display="flex"
          item
          md={5}
          xs={10}
        >
          <Button
            variant="outlined"
            style={{
              color: "#89cff0",
              width: "100%",
              borderColor: "#89cff0",
            }}
            endIcon={<ClearAllIcon />}
            onClick={clearFilters}
          >
            Cбросить фильтры
          </Button>
        </Grid>
      </Grid>
      <DataTable />
    </LocalizationProvider>
  );
};

export default FilterBlock;
