import React from 'react';
import api from '../api';

export default function TaskItem({ task, onTasksUpdated }) {
  const toggleStatus = async () => {
    await api.put(`/tasks/${task._id}`, { status: task.status === 'Pending' ? 'Completed' : 'Pending' });
    onTasksUpdated();
  };

  const handleDelete = async () => {
    if (window.confirm('Delete this task?')) {
      await api.delete(`/tasks/${task._id}`);
      onTasksUpdated();
    }
  };

  return (
    <li>
      <span>{task.title} - {task.status}</span>
      <button onClick={toggleStatus}>Toggle</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
