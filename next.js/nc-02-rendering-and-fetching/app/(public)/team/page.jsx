import TeamList from "@/app/components/TeamList";
import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

//* You can use fetch with async/await in Server Components,
const Team = async () => {
  //? bu sayede serverda data fetch işlemi gerçekleşti ve cliente data fetch edilmiş olarak geldi
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-3xl text-center">Team</h1>
      <TeamList users={users} />
    </div>
  );
};

export default Team;
