import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href={"/signIn"}>Singin</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">
        {" "}
        <Link href={"/signUp"}>SingUp</Link>
      </button>
    </div>
  );
};

export default page;
