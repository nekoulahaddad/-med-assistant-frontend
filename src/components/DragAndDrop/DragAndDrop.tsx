import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from "./styles.module.css";
import LinearWithValueLabel from "./parts";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState({ name: "", size: 0, type: "" });

  const handleChange = (file: any) => {
    setFile(file);
  };

  return (
    <>
      <FileUploader
        label="Загрузите протокол пожалуйста"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      {file.type && (
        <div className={styles.fileInfoBlock}>
          <div>{file?.name}</div>
          <div>{(file?.size / Math.pow(1024, 2)).toFixed(2)} МБ</div>
          <LinearWithValueLabel />
        </div>
      )}
    </>
  );
}

export default DragDrop;
