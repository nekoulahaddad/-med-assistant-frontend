import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReports } from "../../store/reducers/mainSlice";
import { AppDispatch, RootState } from "../../store/store";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import styles from "./styles.module.css";
import { Alert, AlertTitle, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { TReport } from "../../types/main";

const ProtocolsList = () => {
  const Dispatch = useDispatch<AppDispatch>();

  const { reports } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    Dispatch(getAllReports());
  }, [Dispatch]);

  return (
    <div className={styles.ProtocolsList}>
      {reports.length > 0 && (
        <>
          <Typography variant="h5" fontWeight="500" mb="30px" gutterBottom>
            Выберите протокол!
          </Typography>
          {reports?.map((report: TReport) => {
            return (
              <React.Fragment key={report.fileId}>
                {report.status === "ready" && (
                  <Link to={`/report/${report.fileId}`}>
                    <Alert
                      style={{ textAlign: "start", marginBottom: "10px" }}
                      severity="success"
                    >
                      <AlertTitle>{report.fileName}</AlertTitle>{" "}
                      {dayjs(report?.created_at).format("DD/MM/YYYY LT")} —{" "}
                      <strong>успешно загружен!</strong>
                    </Alert>
                  </Link>
                )}{" "}
                {report.status === "processing" && (
                  <Alert
                    icon={<AutorenewIcon fontSize="inherit" />}
                    style={{ textAlign: "start", marginBottom: "10px" }}
                    severity="info"
                  >
                    <AlertTitle>{report.fileName}</AlertTitle>{" "}
                    {dayjs(report?.created_at).format("DD/MM/YYYY LT")} —{" "}
                    <strong>загружается!</strong>
                  </Alert>
                )}
              </React.Fragment>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ProtocolsList;
