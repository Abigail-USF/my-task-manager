'use client';

export default function TaskStats({ total, active, completed, onClearCompleted }) {
  return (
    <section className="mt-6 grid gap-3 sm:grid-cols-4">
      <div className="rounded-2xl bg-slate-700 p-4">
        <p className="text-sm text-slate-400">Total</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="rounded-2xl bg-slate-700 p-4">
        <p className="text-sm text-slate-400">Active</p>
        <p className="text-2xl font-bold">{active}</p>
      </div>

      <div className="rounded-2xl bg-slate-700 p-4">
        <p className="text-sm text-slate-400">Done</p>
        <p className="text-2xl font-bold">{completed}</p>
      </div>

      <button
        onClick={onClearCompleted}
        className="rounded-2xl bg-slate-950 p-4 font-semibold text-cyan-300 transition hover:bg-slate-900"
      >
        Clear Done
      </button>
    </section>
  );
} 