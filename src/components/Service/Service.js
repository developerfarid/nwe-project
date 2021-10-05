import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardItem from '../Card/CardItem';

const Service = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("./fakeData.json").then(res=> res.json()).then(data=> setCourse(data))
    },[])
    return (
        <Container className="my-5">
            <Row>
                <Col md={8}  className=" offset-2 p-4 text-center">
                    <h1>Our Online Course</h1>
                    <p>Offering miscellaneous courses and online programs for fresh university graduates or college pass outs that want to pursue an aspiring career.</p>
                </Col>
            </Row>
                    <Row className="g-4"  xs={1} md={2} lg={3}>
            {
                course.map((item) => <CardItem key={Math.random()} item={item} />)
            }
        </Row>
</Container>
    );
};

export default Service;