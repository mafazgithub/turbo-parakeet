
import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { createTask } from '../../services/api';
import { validateTaskName } from '../../utils/helpers';

const TaskForm = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(null);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
    setError(null);
  };

  const handleAddTask = async () => {
    const isValid = validateTaskName(taskName);

    if (!isValid) {
      setError('Task name cannot be empty');
      return;
    }

    try {
      const newTask = await createTask({ name: taskName });
      addTask(newTask);
      setTaskName('');
    } catch (error) {
      console.error('Error adding task', error);
      setError('Error adding task. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TaskForm;
