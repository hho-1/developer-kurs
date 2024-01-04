"use client";
import { useRouter } from "next/navigation";
import React from "react";

const TeamItem = ({ email, first_name, last_name, avatar, id }) => {
  const router = useRouter();
  return (
    <li
      key={email}
      className="flex justify-between gap-x-6 py-5 w-[50vw] m-auto"
    >
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={avatar}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {first_name} {last_name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {email}
          </p>
        </div>
      </div>
      <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
        <button
          onClick={() => router.push(`/team/${id}`)}
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View
        </button>
      </div>
    </li>
  );
};

export default TeamItem;
