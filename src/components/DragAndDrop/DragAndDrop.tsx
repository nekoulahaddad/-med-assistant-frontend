import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from "./styles.module.css";
import DragAndDropCustom from "./parts/DragAndDropCustom/DragAndDropCustom";
import { useDispatch, useSelector } from "react-redux";
import { addReport, getAllReports } from "../../store/reducers/mainSlice";
import { AppDispatch, RootState } from "../../store/store";

const fileTypes = ["PDF", "xlsx"];

function DragDrop() {
  const Dispatch = useDispatch<AppDispatch>();
  const { reports } = useSelector((state: RootState) => state.main);
  const [file, setFile] = useState({ name: "", size: 0, type: "" });

  const handleChange = (file: any) => {
    setFile(file);
  };

  useEffect(() => {
    Dispatch(getAllReports());
  }, [Dispatch]);

  useEffect(() => {
    file.name && Dispatch(addReport(file));
  }, [file, Dispatch]);

  return (
    <div className={styles.FileUploader}>
      <FileUploader
        label="Загрузите протокол пожалуйста"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        children={<DragAndDropCustom />}
      />
      {reports.length > 0 && (
        <>
          <div className={styles.title}>
            Вы можете Выберать из списка загруженных файлов
          </div>
          {reports?.map((report) => {
            return (
              report.status === "ready" && (
                <div className={styles.fileInfoBlock}>
                  <div>{report?.fileName}</div>
                </div>
              )
            );
          })}
        </>
      )}
    </div>
  );
}

export default DragDrop;
