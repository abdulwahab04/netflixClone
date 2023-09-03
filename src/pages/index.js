import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Herolanding from "@/components/Herolanding";
import Card from "@/components/Card";
import styles from "@/styles/Pages/index.module.css";
import axios from "axios";

export default function Home({ contentData }) {
  console.log(contentData);
  return (
    <div className={styles.container}>
      <Herolanding />
      <div className={styles.carousel}>
        {contentData.map((item) => (
          <Card image={item.attributes.Image.data.attributes.url} link="#" />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const Response = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contents?populate=*`
  );
  const data = await Response.data.data;

  return {
    props: {
      contentData: data,
    },
  };
}
