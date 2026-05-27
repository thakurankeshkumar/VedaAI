"use client";
import { useState } from "react";

export default function Home() {

  const [bools, setBools] = useState(false);

  return (
    <>
      <h1>{bools ? "Ankesh" : "Ankesh Kumar Thakur"}</h1>
      <button onClick={() => setBools(!bools)} className="bg-green-600 rounded" >Change</button>
    </>
  );
}
