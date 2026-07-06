
// ======================================================
// COMPONENT: TaskBoard
// PURPOSE: This component manages all task data for the
// application. It handles adding, deleting, updating,
// filtering, and saving tasks while passing information
// to child components.
// TYPE: Client Component
//
// Props: None
// ======================================================

'use client'

import { useEffect, useState } from 'react'
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

export default function TaskBoard() {

// The task list is stored in state because changes to the list should automatically update what the user sees.

    const [tasks, setTasks] = useState(() => {
        if (typeof window === 'undefined') return [];

        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Stores which filter button is currently selected.
    // This is user interface state rather than task data.

    const [filter, setFilter] = useState('all');

    // Whenever that task list changes, save it to localStorage so the tasks remain after refreshing the browser.

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

// These values are calculated from the tasks array every render instead of being stored separately to avaoid duplicate data.

    const totalCount = tasks.length;
    const completedCount = tasks.filter((task) => task.done).length;
    const activeCount = totalCount - completedCount;

    const visibleTasks=
        filter === 'all'
        ? tasks
        : filter === 'done'
        ? tasks.filter((task) => task.done)
        : tasks.filter((task) => !task.done);

    function handleAddTask(title) {
        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            done: false,
        };
        setTasks([...tasks, newTask]);
    }

    function handleToggleTask(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function handleClearCompleted() {
        setTasks(tasks.filter((task) => !task.done));
    }

    return (
        <section className="w-full max-w-5xl rounded-3xl bg-slate-800 p-8 text-white shadow-2xl">
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                    Module 10 Project: Task Board
                </p>
                <h1 className="text-4xl font-bold text-white">Study Task Dashboard</h1>
                <p className="mt-2 text-slate-300">
                    Organize assignments, track progress, and keep tasks saved after refreshing the page.
                </p>
            </div>

{/* Passes a callback to the child component so TaskBoard remains responsible for managing the task list. */}   

            <AddTaskForm onAddTask={handleAddTask} />

            <TaskStats
                total={totalCount}
                active={activeCount}
                completed={completedCount}
                onClearCompleted={handleClearCompleted}
            />

            <div className="my-6 flex flex-wrap gap-3">
                {['all', 'active', 'done'].map((filterName) => (
                    <button
                        key={filterName}
                        onClick={() => setFilter(filterName)}
                        className={`
                            rounded-full
                            px-5
                            py-2
                            font-medium
                            capitalize
                            transition
                            ${
                                filter === filterName
                                    ? 'bg-cyan-300 text-slate-950'
                                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                            }
                        `}
                    >
                        {filterName}
                    </button>
                ))}
            </div>

            <TaskList
                tasks={visibleTasks}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
            />
        </section>
    );
} 




