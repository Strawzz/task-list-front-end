import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = id => {
      console.log('Delete task with id:', id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const toggleComplete = (id) => {
      setTasks(() => tasks.map((task) => {
        if(task.id === id){
          console.log(`toggle task ${id} completed`)
          return {...task, isComplete: !task.isComplete};
        }
        else{
          return task;
        }
      }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} deleteTask={deleteTask} onToggleComplete={toggleComplete}/>}</div>
      </main>
    </div>
  );
};

export default App;
