import React from "react";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="text-center text-secondary footer">
        <div>
          <h3>Электронный помощник руководителя медицинского учреждения</h3>
        </div>
        <p>&copy; Нода - и точка. 2023.</p>
      </div>
    </div>
  );
};

export default Footer;
