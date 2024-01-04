import GoBackButton from "@/components/GoBackButton";
import React from "react";

const UserDetail = ({ params }) => {
  const { userId } = params;
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, User {userId}
      </h1>
      <GoBackButton />
    </div>
  );
};

export default UserDetail;

//* dinamik sayfalar için meta-data oluşturma
export async function generateMetadata({ params: { userId } }) {
  return {
    title: `User-${userId}`,
    description: `This is the page of User-${userId}`,
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const userArr = [1, 2, 3, 4];
  return userArr.map((userId) => ({
    userId: userId.toString(),
  }));
}
