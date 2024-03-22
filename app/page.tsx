import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
    
    <div  className="w-full flex flex-col justify-center items-center"
      style={{ minHeight: "100vh" }}>
     <h1 className="mb-4">BIENVENUE</h1>
    <div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href={"/signIn"}>Singin</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">
        {" "}
        <Link href={"/signUp"}>SingUp</Link>
      </button>
    </div>

    </div>
    </>
  );
};

export default page;
