
import React from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Scheduler</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
