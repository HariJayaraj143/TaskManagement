import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addOrUpdateTask = async (task) => {
    const token = localStorage.getItem("token");

    if (task.id) {
      // Update existing task
      const updatedTask = await axios.put(
        `http://localhost:5000/api/tasks/${task.id}`,
        task,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.data.id ? updatedTask.data : t))
      );
    } else {
      // Add new task
      const newTask = await axios.post("http://localhost:5000/api/tasks", task, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prev) => [...prev, newTask.data]);
    }
    setCurrentTask(null);
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.status === filter
  );

  return (
    <div className="container mt-5">
      <h2>Task Dashboard</h2>
      <TaskFilter currentFilter={filter} setFilter={setFilter} />
      <TaskForm
        onSubmit={addOrUpdateTask}
        currentTask={currentTask}
        resetCurrentTask={() => setCurrentTask(null)}
      />
      <TaskList
        tasks={filteredTasks}
        setCurrentTask={setCurrentTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Dashboard
