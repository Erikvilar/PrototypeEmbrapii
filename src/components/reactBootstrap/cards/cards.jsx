import { Card, Button } from "react-bootstrap";
const cards = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body >
      <Card.Title> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0074f9"><path d="m234-480-12-60q-12-5-22.5-10.5T178-564l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T222-820l12-60h80l12 60q12 5 22.5 10.5T370-796l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T326-540l-12 60h-80Zm40-120q33 0 56.5-23.5T354-680q0-33-23.5-56.5T274-760q-33 0-56.5 23.5T194-680q0 33 23.5 56.5T274-600ZM592-40l-18-84q-17-6-31.5-14.5T514-158l-80 26-56-96 64-56q-2-18-2-36t2-36l-64-56 56-96 80 26q14-11 28.5-19.5T574-516l18-84h112l18 84q17 6 31.5 14.5T782-482l80-26 56 96-64 56q2 18 2 36t-2 36l64 56-56 96-80-26q-14 11-28.5 19.5T722-124l-18 84H592Zm56-160q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg> {props.title} </Card.Title>
      <Card.Text>{props.details}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <div>
        <span>Faixa nominal: 1200J</span>
        <span>Faixa nominal: 1200J</span>
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