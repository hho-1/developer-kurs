import TeamItem from "@/app/components/TeamItem";
import { getFriends } from "@/helpers/apiFunctions";
import React from "react";

const Profile = async () => {
  const friends = await getFriends();
  return (
    <div>
      <h1 className="text-3xl text-center">Profile</h1>
      <h2 className="text-2xl pl-8">Friends List</h2>
      {friends.map((person) => (
        <TeamItem key={person.id} {...person} />
      ))}
    </div>
  );
};

export default Profile;
