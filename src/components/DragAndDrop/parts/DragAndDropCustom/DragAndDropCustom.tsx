import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import styles from "./styles.module.css";
import { Typography } from "@mui/material";

const DragAndDropCustom = () => {
  return (
    <div className={styles.DragAndDropCustom}>
      <CloudUploadOutlinedIcon className={styles.uploadIcon} />
      <Typography>
        Перетащите Отчёт или{" "}
        <Typography color="rgb(72, 105, 34)" component="span">
          выберите на компьютере
        </Typography>
      </Typography>

      <Typography fontSize="12px" mt={1} color="rgba(0, 0, 0, 0.4)">
        xlsx, размер файла должен быть не больше 10 МБ
      </Typography>
    </div>
  );
};

export default DragAndDropCustom;
