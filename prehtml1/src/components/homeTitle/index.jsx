import React from "react";
import styles from "@/styles/components/HomeTitle.module.css";

const HomeTitle = () => {
  return (
    <div className={styles.titleBackground}>
      <h1 className={styles.titleH1}>白頭翁 (Chinese bulbul)</h1>
      <p className={styles.titleContent}>
        又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
      </p>
    </div>
  );
};

export default HomeTitle;
