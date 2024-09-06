
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const cards = (props) => {
  return (
    <Card >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <table>
          <thead>
            <tr>
              <th>Detalhes do equipamento</th>
            </tr>
          </thead>
          {props.details}
        </table>

   
          <Button value={props.value} onClick={props.event} variant="primary"> +Veja mais </Button>

      </Card.Body>
    </Card>
  );
};
export default cards;
