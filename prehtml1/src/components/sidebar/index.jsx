import React, { useState } from "react";
import styles from "@/styles/components/Sidebar.module.css";
import { SidebarItem } from "@/components/sidebar/sidebarItem";

export const Sidebar = () => {
  const [sidebarContentArray, setSidebarContentArray] = useState([
    { id: 1, title: "白頭翁的特性" },
    { id: 2, title: "白頭翁的故事" },
    { id: 3, title: "白頭翁的美照" },
    { id: 4, title: "白頭翁的危機" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sidebarMain}>
      <div className={styles.sidebarTitle}>
        <div className={styles.titleHamburger}>
          <img
            src={
              isOpen
                ? "/web_images/home/hamburgurClose.png"
                : "/web_images/home/hamburgurOpen.png"
            }
            alt="Hamburger Menu"
            onClick={toggleMenu}
            className="hamburgerIcon"
          />
        </div>
        <div className={styles.titleHeader}>白頭翁不吃小米</div>
        <div className={styles.titleLogo}></div>
      </div>
      <div className={styles.sidebarLogo}></div>

      <div
        className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}
      >
        {sidebarContentArray.map((item, index) => (
          <SidebarItem key={item.id} content={item.title} isOpen={isOpen} />
        ))}
      </div>
    </div>
  );
};
