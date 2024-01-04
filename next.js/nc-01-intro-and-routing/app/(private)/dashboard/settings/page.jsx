import GoBackButton from "@/components/GoBackButton";
import React from "react";

export const metadata = {
  title: "Settings Page",
  description: "This is settings page",
};

const Settings = () => {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, Settings Page
      </h1>
      <GoBackButton />
    </div>
  );
};

export default Settings;
