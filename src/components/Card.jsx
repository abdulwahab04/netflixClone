import React from "react";
import styles from "@/styles/Components/Card.module.css";

export default function Card() {
  return (
    <card>
      <div className={styles.container}>
        <h1> Trending Now</h1>
        <ul className={styles.cards}>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </card>
  );
}
