import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, currentTask, resetCurrentTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  // Populate form when editing a task
  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setStatus(currentTask.status);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required.");
      return;
    }

    onSubmit({
      title,
      description,
      status,
      id: currentTask ? currentTask.id : undefined, // Include ID only for editing
    });

    // Reset the form after submission
    setTitle("");
    setDescription("");
    setStatus("To Do");
    if (resetCurrentTask) resetCurrentTask(); // Reset editing state if applicable
  };

  return (
    <div className="mb-4">
      <h4>{currentTask ? "Edit Task" : "Add New Task"}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {currentTask ? "Update Task" : "Add Task"}
        </button>
        {currentTask && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              resetCurrentTask();
              setTitle("");
              setDescription("");
              setStatus("To Do");
            }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
