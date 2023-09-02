import React from "react";
import styles from "@/styles/Components/Card.module.css";
import Link from "next/link";

export default function Card({ link, image }) {
  return (
    <div className={styles.container}>
      <Link href={link}>
        <img src={image} alt="card" />
      </Link>
    </div>
  );
}
