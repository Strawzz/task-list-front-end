import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, deleteTask, onToggleComplete }) => {
  // const [complete, setComplete] = useState(isComplete);
  const [removed, setRemoved] = useState(false);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  const handleDeleteTask = () => {
    deleteTask(id);
    setRemoved(true);
  };

  return (
    <li className={`tasks__item ${removed ? 'removed' : ''}`}>
      <button
        className={`tasks__item__toggle ${isComplete? 'tasks__item__toggle--completed' : ''}`}
        // onClick={() => setComplete(!complete)}
        onClick={() => onToggleComplete(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={handleDeleteTask}>x</button>
    </li>
  );
};



Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};


export default Task;

