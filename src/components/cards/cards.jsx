import React from "react";
import { Card, Button } from "react-bootstrap";
const cards = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description1}</Card.Text>
        <table>
            <th>Caracteristicas </th>
        
          {props.details}
     
          </table>

        <Button variant="primary">
          <a href="">+ Veja mais</a>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default cards;
