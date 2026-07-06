//
// Component: Home Page
// Purpose: This is the application's only page. It is a server component that renders the TaskBoard component. 
// All task state is managed inside TaskBoard.
// TYPE: Server Component

import TaskBoard from "../components/TaskBoard";

export default function Home() {
  return (
    <main className= "min-h-screen bg-slate-900 flex items-center justify-center p-8">
    <TaskBoard /> 
  </main>
  );
}

