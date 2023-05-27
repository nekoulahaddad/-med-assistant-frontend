import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from "./styles.module.css";
import DragAndDropCustom from "./parts/DragAndDropCustom/DragAndDropCustom";
import { useDispatch } from "react-redux";
import { getAllReports } from "../../store/reducers/mainSlice";
import { AppDispatch } from "../../store/store";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const Dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState({ name: "", size: 0, type: "" });

  const handleChange = (file: any) => {
    setFile(file);
  };

  useEffect(() => {
    Dispatch(getAllReports());
  }, [Dispatch]);

  return (
    <div className={styles.FileUploader}>
      <FileUploader
        label="Загрузите протокол пожалуйста"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        children={<DragAndDropCustom />}
      />
      {file.type && (
        <>
          <div className={styles.title}>
            Вы можете Выберать из списка загруженных файлов
          </div>
          <div className={styles.fileInfoBlock}>
            <div>{file?.name}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default DragDrop;
