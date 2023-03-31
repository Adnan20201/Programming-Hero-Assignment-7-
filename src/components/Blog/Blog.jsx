import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Blog = () => {
    return (
        <div>
            <Container >
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={11} md={9} style={{ paddingTop: '50px', backgroundColor: 'white' }}>
                        <Card style={{}}>
                            <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/05/78/54/94/1000_F_578549473_qk6M4kZ16pLYRM1Fed8x2wX7f1hEpUzQ.jpg"/>
                            <Card.Body>
                                <div className='display:inline-block'>
                                    <Card.Img variant="top" src="" />
                                    <Card.Title>Mr. Raju</Card.Title>
                                </div>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7} md={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati molestiae nulla dolor quis et minima tempore nisi soluta temporibus.
                    </Col>
                </Row>
                <Row style={{ marginTop: '0px' }}>
                    <Col xs={11} md={9} style={{ paddingTop: '50px', backgroundColor: '' }}>
                        <Card style={{}}>
                            <Card.Img variant="top" src="../images/one.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;