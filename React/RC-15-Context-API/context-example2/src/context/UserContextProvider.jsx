import React, { createContext, useEffect, useState } from "react";

//? 1-Creating Context
export const UserContext = createContext();

//? 2-provider component
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const changeWidth = (userId, width) => {
    const newUsers = users.map((user) =>
      user.id === userId ? { ...user, width: width } : user
    );
    setUsers(newUsers);
  };
  return (
    <UserContext.Provider value={{ users, changeWidth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
