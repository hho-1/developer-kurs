import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const User = ({ user }) => {
  const { id, login, avatar_url, width } = user;
  const { changeWidth } = useContext(UserContext);
  return (
    <div>
      <h3>{login} </h3>
      <img src={avatar_url} alt="avatar" width={width} />
      <div>
        <label htmlFor="width">Image width(px)</label>
        <input
          type="number"
          onChange={(e) => changeWidth(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default User;
