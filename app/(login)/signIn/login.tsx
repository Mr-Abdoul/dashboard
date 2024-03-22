"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Login = () => {
  // const router = useRouter()
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // console.log({ useRouter });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch(
      "https://portfolio-back-end-beta.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((res) => {
        if (res.ok) {
          router.push("/dashboard");
        }
        return res.json();
      })
      .catch((error) => {
        // ici je gérez les erreurs de la requête
        console.error(
          "Erreur lors de la requête: cet utilisateur n'existe pas",
          error
        );
      });

  };

  return (
    <div
      className="h-screen flex flex-col  
    items-center justify-center "
    >
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
        <div className="flex flex-col items-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className=" text-black text-sm text-gray-base w-full  
            mr-3 py-5 px-4 h-2 border  
            border-gray-200 rounded mb-2"
            // value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className=" text-black text-sm text-gray-base w-full  
            mr-3 py-5 px-4 h-2 border  
            border-gray-200 rounded mb-2"
            // value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md w-full mt-4"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
