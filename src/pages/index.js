import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Herolanding from "@/components/Herolanding";
import Card from "@/components/Card";
import styles from "@/styles/Pages/index.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Herolanding />
      <div className={styles.carousel}>
        <Card image="/images/card1.jpg" link="#" />
        <Card image="/images/card2.jpg" link="#" />
        <Card image="/images/card3.jpg" link="#" />
        <Card image="/images/card4.jpg" link="#" />
      </div>
    </div>
  );
}
