import React from "react";

import styles from "@/styles/components/HomeContnet.module.css";

export const ContentCart = ({ title, content }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitleBlock}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardCircle}></div>
      </div>
      <div className={styles.cardContent}>{content}</div>
    </div>
  );
};
