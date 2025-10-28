import React, { useState } from 'react';
import api from '../api';

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await api.post('/tasks', { title, description });
    setTitle('');
    setDescription('');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description (optional)" />
      <button type="submit">Add Task</button>
    </form>
  );
}
