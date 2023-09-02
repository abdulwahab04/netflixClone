import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Herolanding from "@/components/Herolanding";
import Card from "@/components/Card";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Herolanding />
      <Card />
    </div>
  );
}
