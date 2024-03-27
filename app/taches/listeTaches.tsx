"use client"

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const LesTache = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`${process.env.URL_BACKEND}/api/send/getTache`);
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);
  

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Project</h1>
          <Link href="/taches"
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200" 
          >
            Create New
          </Link>
        </div>
        <ul>
          {tasks?.map((task: any) => (
            <li  key={task._id} className="py-2 flex justify-between w-full">
              <span>
                <strong>{task.Nom}</strong> - {task.description}
              </span>
              <span className="flex gap-2">
                <Link className="text-blue-700 underline hover:no-underline" href={`/taches/edite/${task._id}`}>Edit</Link>
                <Link className="text-red-500 underline hover:no-underline" href={`/taches/delete/${task._id}`}>Delete</Link>
              </span>
            </li>
          ))}
          {tasks?.length < 1 && <div className="py-2">No data</div>}
        </ul>
      </div>
      <Head>
        <title>Project</title>
      </Head>
    </>
  );
};

export default LesTache;