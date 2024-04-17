"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

export interface TaskModel {
  name: string,
  description: string,
  image: string | ArrayBuffer | null | undefined | number | object
}

const CreateTache = () => {
  const router = useRouter();
  const [task, setTask] = useState<TaskModel>({
    name: "",
    description: "",
    image: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // setTask({ ...task, [e.target.name]: e.target.value });
    // console.log(task.img);
  };


  const handleCreate = async () => {
    // console.log(task);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/create-task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.ok) {
      // Project created successfully
      router.push("/dashboard");
    } else {
      // Handle error
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleCreate()
  };
  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Create Project</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label>Nom</label>
            <input
              className=" text-black mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="name"
              // value={task?.Nom}
              // onChange={onChange}
              onChange={(e) => {
                const inputValue = e.target.value
                setTask({ ...task, name: inputValue})
              }}
            />
          </div>
          <div className="mb-4">
            <label>Description</label>
            <input
              className=" text-black mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="description"
              // value={task?.description}
              // onChange={onChange}
              onChange={(e) => {
                const inputValue = e.target.value
                setTask({ ...task, description: inputValue})
              }}
            />
          </div>
          { <div className="mb-4">
            <label>image</label>
            <input
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="file"
              name="image"
              id="image"
              // value={task?.image}
              // onChange={onChange}
              onChange={(e: any) => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onloadend = () => {
                  setTask({...task, image: reader.result})
                }
              }}
              accept="image/png,image/gif,image/jpg,image/jpeg"
            />           
          </div> }
          <button
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200 w-full"
            type="submit"
          >
            Create Project
          </button>
        </form>
      </div>
      <Head>
        <title>Create Project</title>
      </Head>
    </>
  );
};

export default CreateTache;
