import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

//declaring the component that receives the addTask as prop
const TaskInputForm = ({ addTask }) => {
  //initializing the  state using hook to update later
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask('');
  };

  //the format for the form that receives the parameters for the task dashboard
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskInputForm;
