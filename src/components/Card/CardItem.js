import React from "react";
import { Button, Col, Card } from "react-bootstrap";

const CardItem = ({item}) => {
    console.log(item);

  return (
    <Col>
      <Card className="h-100">
        <Card.Img style={{height:"250px" ,objectFit:"cover"}}  variant='top' src={item?.img} />
        <Card.Body>
                  <Card.Title>{ item?.title}</Card.Title>
          <Card.Text>
            <p className="d-flex justify-content-between"><span>{item?.name}</span> <span>Enroll:{item.student}</span></p>
            <p className="d-flex justify-content-between"><span>Course Price: <b>${item?.price}</b></span><span>Rating: <b>{ item?.rating}</b></span></p>
          </Card.Text>
          
         
        </Card.Body>
        <Card.Footer>
          <Button className="w-100" variant='primary'>Enroll Now </Button>
          </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardItem;
