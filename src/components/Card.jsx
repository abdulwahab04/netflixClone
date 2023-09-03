import React from "react";
import styles from "@/styles/Components/Card.module.css";
import Link from "next/link";

export default function Card({ link, image }) {
  const imageUrl = `http://localhost:1337${image}`;
  return (
    <div className={styles.container}>
      <Link href={link}>
        <img src={imageUrl} alt="card" />
      </Link>
    </div>
  );
}
