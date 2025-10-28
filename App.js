import React, { useState, useEffect } from 'react';
import api from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} onTasksUpdated={fetchTasks} />
    </div>
  );
}
