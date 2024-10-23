import { Card, Button } from "react-bootstrap";
const cards = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body >
      <Card.Title>{props.title} </Card.Title>
      <Card.Text>{props.details}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <div>
       {props.others}
        </div>
        <Button value={props.value} onClick={props.event} variant="primary">
          {" "}
          + Veja mais{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default cards;
