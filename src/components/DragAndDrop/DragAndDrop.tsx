import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from "./styles.module.css";
import DragAndDropCustom from "./parts/DragAndDropCustom/DragAndDropCustom";
import { useDispatch } from "react-redux";
import { addReport } from "../../store/reducers/mainSlice";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
const fileTypes = ["PDF", "xlsx"];

function DragDrop() {
  let navigate = useNavigate();

  const Dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState({ name: "", size: 0, type: "" });

  const handleChange = (file: any) => {
    setFile(file);
  };

  useEffect(() => {
    file.name &&
      Dispatch(addReport(file)).then(
        (res) => res.meta.requestStatus === "fulfilled" && navigate("/files")
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <div className={styles.FileUploader}>
      <FileUploader
        label="Загрузите протокол пожалуйста"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        children={<DragAndDropCustom />}
      />
    </div>
  );
}

export default DragDrop;
