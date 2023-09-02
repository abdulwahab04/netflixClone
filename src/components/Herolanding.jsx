import React from "react";
import styles from "@/styles/Components/Herolanding.module.css";

export default function Herolanding() {
  return (
    <landing className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <img src="./images/Iconnetflix.png" alt="logo" />
          SERIES
        </h1>
        <h1 className={styles.title}>
          STRANGER <br /> THINGS
        </h1>
        <p>
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and a strange
          little girl.
        </p>
        <a href="#" className={styles.playBtn}>
          Play
        </a>
        <a href="#" className={styles.infoBtn}>
          More Info
        </a>
      </div>
    </landing>
  );
}
