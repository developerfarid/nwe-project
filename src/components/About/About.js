import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopHeading from '../TopHeading/TopHeading';

const About = () => {
    return (
        <>
            <TopHeading></TopHeading>
            <Container className="py-5">
            <Row className="align-items-center"> 
                <Col>
                    <img  className="img-fluid" src={"https://res.cloudinary.com/grand-canyon-university/image/fetch/w_724,h_483,c_fill,g_faces/https%3A%2F%2Fwww.gcu.edu%2Fsites%2Fdefault%2Ffiles%2F2020-09%2Fprogramming.jpg"} alt="" />
                </Col>
                <Col>
                    <h6>About </h6>
                    <h2>Limitless Learning And Get More Possibilities</h2>
                    <p>We specialize in providing professional & practical support to international students looking for admission at some of the most deemed universities across the globe. Have successfully placed over 3500 students in some of the reputable universities across the US.</p>
                    <p>Mr Jamal</p>
                    <p>Director</p>
                </Col>
            </Row>
        </Container>
        
        </>
    );
};

export default About;