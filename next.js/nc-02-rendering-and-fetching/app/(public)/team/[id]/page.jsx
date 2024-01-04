import PersonCard from "@/app/components/PersonCard";
import { getUserDetail, getUsers } from "@/helpers/apiFunctions";
import React from "react";

const TeamDetail = async ({ params: { id } }) => {
  const person = await getUserDetail(id);
  console.log(person);
  return (
    <div>
      <h1 className="text-2xl text-center">Team Person</h1>
      <PersonCard {...person} />
    </div>
  );
};

export default TeamDetail;

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ id: user.id.toString() }));
}

export async function generateMetadata({ params: { id } }) {
  const person = await getUserDetail(id);
  return {
    title: person.first_name + " " + person.last_name,
    description: `This is the page of ${person.first_name}`,
  };
}
