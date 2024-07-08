import React, { useState } from 'react';
import { HiTrash, HiPencil, HiChevronDown, HiChevronUp, HiCalendar } from 'react-icons/hi';
import { useTasks } from '../context/TasksContext';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Asegúrate de importar utc desde dayjs/plugin/utc
dayjs.extend(utc);

function TaskCard({ task }) {
    const [expanded, setExpanded] = useState(false);
    const { deleteTask } = useTasks();

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full transition-all duration-300 hover:shadow-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
                <button
                    className="text-gray-500 hover:text-red-600 transition-colors duration-300"
                    onClick={() => {
                        deleteTask(task._id);
                    }}
                    title='Delete'
                >
                    <HiTrash className="w-5 h-5" />
                </button>
                <Link to={`/tasks/${task._id}`}>
                    <button
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        title='Edit'
                    >
                        <HiPencil className="w-5 h-5" />
                    </button>
                </Link>
            </div>

            <h1 className="text-xl font-semibold mb-3 text-gray-800 break-words pr-16">{task.title}</h1>
            <p className={`text-sm mb-3 text-gray-600 break-words ${expanded ? '' : 'line-clamp-3'}`}>
                {task.description}
            </p>
            {task.description.length > 100 && (
                <button
                    className="text-sm text-blue-600 mb-3 focus:outline-none flex items-center"
                    onClick={toggleExpansion}
                >
                    {expanded ? (
                        <>
                            View less <HiChevronUp className="ml-1" />
                        </>
                    ) : (
                        <>
                            View more <HiChevronDown className="ml-1" />
                        </>
                    )}
                </button>
            )}
            <div className="mt-auto">
                <p className="text-xs text-gray-500 flex items-center">
                    <HiCalendar className="mr-1" /> {dayjs.utc(task.date).format('DD/MM/YYYY')}
                </p>
            </div>
        </div>
    );
}

export default TaskCard;
