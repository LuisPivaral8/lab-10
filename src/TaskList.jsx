import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

//here is declared the component, wich recieves the props tasks and deleteTask
const TaskList = ({ tasks, deleteTask, deleteAllTask }) => {
  // this will count the tasks added on the list
  const taskCount = tasks.length;
  //returning the list of tasks added on the format of column and Rows

  // function that will delete all tasks on the list
  const handleDeleteAll = () => {
    deleteAllTask();
  };

  return (
    <Container>
      <Row>
        <Col>
        {/* here is the text that shows how many tasks are on the list */}
          <p>{taskCount} pending tasks</p>
        </Col>
        {/* adding the Delete all button to the dashboard */}
        <Col className="text-right">
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete all
          </Button>
        </Col>
      </Row>
      {tasks.map((task, index) => (
        <Row key={index} className="mb-2">
          <Col>{task}</Col>
          <Col className="d-flex justify-content-end">
            <Button variant="danger" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default TaskList;
