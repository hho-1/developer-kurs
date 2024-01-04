import GoBackButton from "@/components/GoBackButton";
import React from "react";

export const metadata = {
  title: "Profile Page",
  description: "This is profile page",
};

const Profile = () => {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, Profile Page
      </h1>
      <GoBackButton />
    </div>
  );
};

export default Profile;
