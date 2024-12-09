import React from "react";

const TaskFilter = ({ currentFilter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="taskFilter" className="form-label">
        Filter Tasks
      </label>
      <select
        id="taskFilter"
        className="form-select"
        value={currentFilter}
        onChange={handleFilterChange}
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;
