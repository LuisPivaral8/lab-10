import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

//here we declare the component, wich recieves the props tasks and deleteTask
const TaskList = ({ tasks, deleteTask }) => {
  //returning the list of tasks added on the format of column and Rows
  return (
    <Container>
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
