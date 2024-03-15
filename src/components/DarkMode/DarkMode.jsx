"use client";
import { useContext } from "react";
import styles from "./DarkMode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  const {mode,toggle} =  useContext(ThemeContext) 
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>☀️</div>
      <div className={styles.icon}>🌑</div>
      <div
        className={styles.switcher}
        style={mode === "dark" ? { right: 0 } : { left: 0 }}
      />
    </div>
  );
};

export default DarkMode;
