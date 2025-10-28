import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onTasksUpdated }) {
  return (
    <ul>
      {tasks.map(t => <TaskItem key={t._id} task={t} onTasksUpdated={onTasksUpdated} />)}
    </ul>
  );
}
