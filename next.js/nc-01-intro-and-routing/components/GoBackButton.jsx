"use client";
//* next.js'de tüm componentler default olarak server componenttir. Hooklar vb. client yapılarını kullanmak istiyorsak use-client direktifini kullanarak componenti client-component'e çevirmemiz gerekir
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className=" text-gray-800 hover:text-gray-100 hover:bg-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded shadow float-right mt-4"
      type="button"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
