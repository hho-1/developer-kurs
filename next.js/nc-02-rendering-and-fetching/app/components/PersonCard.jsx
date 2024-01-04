"use client";
import { addFriends } from "@/helpers/apiFunctions";
import { useRouter } from "next/navigation";
import React from "react";

const PersonCard = ({ avatar, first_name, last_name, email }) => {
  const router = useRouter();
  return (
    <div className="w-[70%] m-auto bg-white border border-gray-200 rounded-s-lg shadow">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={avatar}
          alt="person-detail"
        />
        <h5>
          {first_name} {last_name}
        </h5>
        <span className="text-sm text-gray-500">{email} </span>
        <div className="flex mt-4 md:mt-6">
          <button
            className="btn-primary"
            onClick={() => addFriends({ avatar, first_name, last_name, email })}
          >
            Add friend
          </button>
          <button className="btn-secondary" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
