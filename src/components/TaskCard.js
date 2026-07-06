'use client';

export default function TaskCard({ id, title, done, onToggleTask, onDeleteTask }) {
    const taskstyle = done
        ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-400'
        : 'border-slate-600 bg-slate-400/10 text-slate-400';

    const titleStyle = done ? 'line-through' : '';

    return (
        <article className={`flex items-center justify-between gap-4 rounded-2xl border p-4 ${taskstyle}`}>
            <button
                onClick={() => onToggleTask(id)}
                className="rounded-full border border-cyan-300 px-3 py-1 text-sm font-semibold text-cyan-200 hover:bg-cyan-300 hover:text-slate-950"
            >
                {done ? 'Done' : 'Active'}
            </button>

            <p className={`flex-1 text-lg ${titleStyle}`}>{title}</p>

            <button
                onClick={() => onDeleteTask(id)}
                className="rounded-full bg-rose-400 px-3 py-1 text-sm font-semibold text-slate-950 hover:bg-rose-300"
            >
                Delete
            </button>
        </article>
    );
}
