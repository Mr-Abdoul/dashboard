"use client";

import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
import router from "next/router";
// import { signIn } from "next-auth/react"; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
  //   _event.preventDefault();
  //   console.log("hehe")
  //   // throw new Error("Function not implemented.");
  // }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("https://portfolio-back-end-beta.vercel.app/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: formData.password,
        email: formData.email,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log("Inscription réussie!", data);
        router.push('/dashboard')
      })
      .catch((err) => {
        console.log("Erreur survenue !");
        setErrors(err);
      });
  };

  // Utilisez signIn avec le fournisseur d'inscription après l'inscription réussie
  // const result =  signIn('credentials', {
  //   redirect: false, // Empêche la redirection automatique
  //   email: formData.email,
  //   password: formData.password,
  // });

  return (
    <div
      className="h-screen flex flex-col  
      items-center justify-center "
    >
      <h1 className="text-2xl font-bold my-4">Inscription</h1>
      <form className="flex flex-col w-1/3" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="text-black border p-2 my-2 rounded-md"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="text-black border p-2 my-2 rounded-md"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          className="text-black border p-2 my-2 rounded-md"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}

        <input
          type="submit"
          /* onClick={(e) => {e.preventDefault(); console.log("hehe")}} */ className="bg-blue-500 text-white p-2 rounded-md"
          value={"Soumettre"}
        />
      </form>
    </div>
  );
};

export default SignUp;
