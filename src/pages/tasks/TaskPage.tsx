import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TaskItem from "../../components/TaskItem";
import { useNavigate } from "react-router-dom";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (!input.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-100">
        <h1 className="text-center text-3xl font-bold text-red-800 mb-6">Task Manager</h1>

        <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
          <Input label="Tambah Tugas" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Contoh: Fixing Front Page" />
          <Button text="Tambah" onClick={addTask} />
        </div>

        <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Tugas Belum Selesai</h3>
          <div className="space-y-3">
            {pendingTasks.length ? pendingTasks.map((task) => <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />) : <p className="text-gray-600 py-3 text-center italic">Tidak ada tugas.</p>}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Tugas Selesai</h3>
          <div className="space-y-3">
            {completedTasks.length ? completedTasks.map((task) => <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />) : <p className="text-gray-600 py-3 text-center italic">Belum ada tugas selesai.</p>}
          </div>
        </div>
        <div className="flex justify-center mb-6 mt-6">
          <button onClick={handleLogout} className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
