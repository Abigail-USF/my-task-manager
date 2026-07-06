'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        if (!title.trim()) return;

        onAddTask(title.trim());

        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter a new task..."
                className="flex-1 rounded-xl border border-state-600 bg-slate-700 px-4 py-3 text-white placeholde-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
        
        <button
            type="submit"
            className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
            Add Task
            </button>
        </form>
    );
}
