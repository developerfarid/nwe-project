import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import CardItem from '../Card/CardItem';

const Home = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("./fakeData.json").then(res=> res.json()).then(data=> setCourse(data))
    },[])
    return (
        <>
        <Carousel>
  <Carousel.Item>
    <img style={{height:"700px", objectFit:"cover"}}
      className="d-block img-fluid w-100"
      src={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png"}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"700px", objectFit:"cover"}}
      className="d-block w-100"
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI02tRliiIKENbebm3GNyqstNcl-A1zCm-sw&usqp=CAU"}
      alt="Second slide"
    />
  </Carousel.Item>
  
</Carousel>
        <Container className="my-5">
        <Row>
                <Col md={8}  className=" offset-2 p-4 text-center">
                    <h1>Our Online Course</h1>
                    <p>Offering miscellaneous courses and online programs for fresh university graduates or college pass outs that want to pursue an aspiring career.</p>
                </Col>
            </Row>

                    <Row>
            {
                course.slice(2,5).map((item) => <CardItem key={Math.random()} item={item} />)
            }
        </Row>
</Container>
        </>
    );
};

export default Home;