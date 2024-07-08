import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).format('YYYY-MM-DD')); // Set formatted date if editing
      }
    }
    loadTask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit((data) => {
    // Set current date if data.date is empty or undefined
    if (!data.date) {
      data.date = dayjs().format();
    }

    if (params.id) {
      updateTask(params.id, {
        ...data,
        date: dayjs.utc(data.date).format()
      });
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format()
      });
    }
    navigate("/tasks");
  });

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-black p-4">
      <div className="absolute inset-0 z-0">
        <img
          src="https://image.freepik.com/vector-gratis/pizarra-dos-piezas-tiza_97886-5.jpg"
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-55"
          alt="Background"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-8 rounded border border-white w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">New Task</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-black" htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("title")}
                autoFocus
              />
            </div>
            <div>
              <label className="block mb-1 text-black" htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                placeholder="Description"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("description")}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block mb-1 text-black" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('date')}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskFormPage;
