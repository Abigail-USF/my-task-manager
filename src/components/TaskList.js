'use client';

import TaskCard from './TaskCard';

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <div className="mt-6 space-y-3">
            {tasks.length === 0 ? (
                <p className="text-center text-slate-400">No tasks to display.</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        done={task.done}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))
            )}

        </div>
    );
}   
