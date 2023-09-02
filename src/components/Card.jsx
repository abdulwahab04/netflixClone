import React from "react";
import styles from "@/styles/Components/Card.module.css";
import Link from "next/link";

export default function Card({ link, image }) {
  const imageUrl = image.data.attributes.thumbnail;
  console.log(image)
  console.log(imageUrl);
  return (
    <div className={styles.container}>
      <Link href={link}>
        <img src={imageUrl} alt="card" />
      </Link>
    </div>
  );
}
