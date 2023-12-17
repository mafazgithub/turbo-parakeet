

import React from 'react';
import { useTaskContext } from '../../context/TaskContext';

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
