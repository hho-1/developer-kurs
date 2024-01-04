"use client";
import React, { useState } from "react";
import ServerComponent from "./ServerComponent";

const ClientComponent = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 border">
        Artır
      </button>
      <p>{count}</p>
      {children}
      {/* <ServerComponent /> */}
    </div>
  );
};

export default ClientComponent;
