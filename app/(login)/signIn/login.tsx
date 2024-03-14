"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

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

    // const response = await fetch("http://localhost:4000/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (response.ok) {
    //   router.push("/dashboard");
    // } else {
    //   console.log("désoler cet utilisateur n\'existe pas veillez vous inscrire");
    // }

     fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
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
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => router.push("/signUp")}
          >
            Tu es nouveau?
            <link rel="stylesheet" href="/dashboard" />
            Sign In
          </span>
        </div>
      </form>
    </div>
  );
}
export default Login;
