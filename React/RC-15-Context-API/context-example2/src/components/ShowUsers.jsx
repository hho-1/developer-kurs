import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import User from "./User";

const ShowUsers = () => {
  //? users bilgisini contex'ten okuma
  const { users } = useContext(UserContext);
  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ShowUsers;
