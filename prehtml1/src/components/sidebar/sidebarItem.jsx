import React from "react";
import styles from "@/styles/components/Sidebar.module.css";

export const SidebarItem = ({ content, isOpen }) => {
  return (
    <div className={`${styles.sidebarItem} ${isOpen ? styles.open : ""}`}>
      {content}
    </div>
  );
};
