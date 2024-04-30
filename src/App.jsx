//For this laboratory was used Bootstrap, so first was installed the library and added on the package.json file as dependency
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';

//the app component use de TaskList and the TaskinputForm to show the mini task dashboard
const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  //component that mannages to delete all tasks
  const deleteAllTask = () => {
    setTasks([]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <b>
            <h>Mini Task Dashboard</h>
          </b>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <TaskInputForm addTask={addTask} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          {/* Here was added the deleteAllTask function from tasklist  */}
          <TaskList tasks={tasks} deleteTask={deleteTask} deleteAllTask={deleteAllTask} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
