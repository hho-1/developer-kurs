import React from "react";
import TeamItem from "./TeamItem";

const TeamList = ({ users }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((person) => (
        <TeamItem key={person.id} {...person} />
      ))}
    </ul>
  );
};

export default TeamList;
