"use client"

import React, { useEffect, useState } from 'react'
import Head from "next/head";
import { useParams, useRouter } from 'next/navigation';

const Edit = (task: any) => {
  const params = useParams()
  console.log({params});
  const router = useRouter();
  const { id } = params;

  const [data, setData] = useState({
    name: task.name,
    description: task.description,
    image: ""
  });

  // const onChange = (e:any) => {
  //   setData({ ...task, [e.target.name]: e.target.value });
  // };
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e: any) => {
    const selectedImage = e.target.files[0];
    setData(prevState => ({
      ...prevState,
      image: selectedImage
    }));
  };


  const handleUpdate = async () => {
    const response = await fetch(`https://portfolio-back-end-beta.vercel.app/api/tache/edite/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      // Task update successfully
      router.push("/dashboard");
    } else {
      // Handle error
      alert("error to edit task");
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px] ">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Edit Task</h1>
        </div>
        <form>
          <div className="mb-4">
            <label>Name</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="name"
              value={data?.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label>Description</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="description"
              value={data?.description}
              onChange={onChange}
            />
          </div>
          { <div className="mb-4">
            <label>image</label>
            <input
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="file"
              name="image"
              id="image"
              // value={data?.image}
              onChange={handleImageChange}
              accept="image/png,image/gif,image/jpg,image/jpeg"
            />           
          </div> }
          <button
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200 w-full"
            type="button"
            onClick={handleUpdate}
          >
            Edit Task
          </button>
        </form>
      </div>
      <Head>
        <title>Edit Task</title>
      </Head>
    </>
  );
};

export default Edit;

