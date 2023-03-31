import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// get our fontawesome imports
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Blog = () => {
    return (
        <div>
            <Container >
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={11} md={9} className='' style={{ width: '60%', backgroundColor: 'white', borderRadius: '10px' }}>
                        <Card style={{ padding: '10px', borderRadius: '10px' }}>
                            <Card.Img variant="top" className='rounded' style={{ width: '100%', padding: '10px',borderRadius: '10px'  }} src="https://as1.ftcdn.net/v2/jpg/05/78/54/94/1000_F_578549473_qk6M4kZ16pLYRM1Fed8x2wX7f1hEpUzQ.jpg" />
                            <Card.Body>
                                <div style={{ display: 'inline-block', alignContent: 'center' }}>
                                    <Card.Img variant="top" style={{ width: '60px', hight: '60px', borderRadius: '50px', padding: '0' }} src="https://as1.ftcdn.net/v2/jpg/04/62/16/28/1000_F_462162871_R1r5tvA8bUuDYhXz1XpqoeSwGJVlmk1o.jpg" />
                                    <Card.Title style={{ display: 'inline-block', paddingLeft: '10px', marginRight: '245px' }}>Mr. Raju
                                        <p style={{ fontSize: '16px', color: ' rgba(17, 17, 17, 0.6)' }}>Mar 14 (4 Days ago)</p>
                                    </Card.Title>
                                    <Card.Text style={{ display: 'inline-block' }}>
                                        <p style={{ display: 'inline-block', color: ' rgba(17, 17, 17, 0.6)' }}>05 min read</p>
                                        <a href="" style={{ marginLeft: '20px' }} className="bookmark"> <FontAwesomeIcon icon={faBookmark} /></a>
                                    </Card.Text>
                                </div>
                                <Card.Text>
                                    <h3 style={{ fontSize: '35px', color: '#111111', fontWeight: '600', paddingTop: '10px' }}>How to get your first job as a self-taught programmer</h3>
                                    <p style={{ fontSize: '17px', paddingTop: '10px', color: 'color: rgba(17, 17, 17, 0.6)' }}>#beginners  #programming</p>
                                </Card.Text>
                                <Card.Text>
                                    <h5 style={{ color: '#6047EC' }}>Mark as read</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7} md={3} className="sticky" style={{ position: ' sticky', top: '20px', zIndex: 22222, marginLeft: '170px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati molestiae nulla dolor quis et minima tempore nisi soluta temporibus.
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={11} md={9} className='' style={{ width: '60%', backgroundColor: 'white', borderRadius: '10px' }}>
                        <Card style={{ padding: '10px', borderRadius: '10px' }}>
                            <Card.Img variant="top" className='rounded' style={{ width: '100%', padding: '10px', borderRadius:'20px' }} src="https://as1.ftcdn.net/v2/jpg/03/86/83/28/1000_F_386832865_KzXYSvOLzUhztbeVD5d6pi2MBMqwBGAL.jpg" />
                            <Card.Body>
                                <div style={{ display: 'inline-block', alignContent: 'center' }}>
                                    <Card.Img variant="top" style={{ width: '60px', hight: '60px', borderRadius: '50px', padding: '0' }} src="https://as2.ftcdn.net/v2/jpg/03/07/33/81/1000_F_307338115_ca0if1wY3FdmmgAqDsf7FKArM9o0TvWv.jpg" />
                                    <Card.Title style={{ display: 'inline-block', paddingLeft: '10px', marginRight: '245px' }}>Mr. Raju
                                        <p style={{ fontSize: '16px', color: ' rgba(17, 17, 17, 0.6)' }}>Mar 14 (4 Days ago)</p>
                                    </Card.Title>
                                    <Card.Text style={{ display: 'inline-block' }}>
                                        <p style={{ display: 'inline-block', color: ' rgba(17, 17, 17, 0.6)' }}>05 min read</p>
                                        <a href="" style={{ marginLeft: '20px' }} className="bookmark"> <FontAwesomeIcon icon={faBookmark} /></a>
                                    </Card.Text>
                                </div>
                                <Card.Text>
                                    <h3 style={{ fontSize: '35px', color: '#111111', fontWeight: '600', paddingTop: '10px' }}>How to get your first job as a self-taught programmer</h3>
                                    <p style={{ fontSize: '17px', paddingTop: '10px', color: 'color: rgba(17, 17, 17, 0.6)' }}>#beginners  #programming</p>
                                </Card.Text>
                                <Card.Text>
                                    <h5 style={{ color: '#6047EC' }}>Mark as read</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={11} md={9} className='' style={{ width: '60%', backgroundColor: 'white', borderRadius: '10px' }}>
                        <Card style={{ padding: '10px', borderRadius: '10px' }}>
                            <Card.Img variant="top" className='rounded' style={{ width: '100%', padding: '10px' }} src="https://as2.ftcdn.net/v2/jpg/02/83/46/33/1000_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg" />
                            <Card.Body>
                                <div style={{ display: 'inline-block', alignContent: 'center' }}>
                                    <Card.Img variant="top" style={{ width: '60px', hight: '60px', borderRadius: '50px', padding: '0' }} src="https://as2.ftcdn.net/v2/jpg/02/97/24/51/1000_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg" />
                                    <Card.Title style={{ display: 'inline-block', paddingLeft: '10px', marginRight: '245px' }}>Mr. Raju
                                        <p style={{ fontSize: '16px', color: ' rgba(17, 17, 17, 0.6)' }}>Mar 14 (4 Days ago)</p>
                                    </Card.Title>
                                    <Card.Text style={{ display: 'inline-block' }}>
                                        <p style={{ display: 'inline-block', color: ' rgba(17, 17, 17, 0.6)' }}>05 min read</p>
                                        <a href="" style={{ marginLeft: '20px' }} className="bookmark"> <FontAwesomeIcon icon={faBookmark} /></a>
                                    </Card.Text>
                                </div>
                                <Card.Text>
                                    <h3 style={{ fontSize: '35px', color: '#111111', fontWeight: '600', paddingTop: '10px' }}>How to get your first job as a self-taught programmer</h3>
                                    <p style={{ fontSize: '17px', paddingTop: '10px', color: 'color: rgba(17, 17, 17, 0.6)' }}>#beginners  #programming</p>
                                </Card.Text>
                                <Card.Text>
                                    <h5 style={{ color: '#6047EC' }}>Mark as read</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={11} md={9} className='' style={{ width: '60%', backgroundColor: 'white', borderRadius: '10px' }}>
                        <Card style={{ padding: '10px', borderRadius: '10px' }}>
                            <Card.Img variant="top" className='rounded' style={{ width: '100%', padding: '10px' }} src="https://as2.ftcdn.net/v2/jpg/02/39/32/65/1000_F_239326573_4es5SV4zAdBaM8JezBmIuYAeuMCbAMs4.jpg" />
                            <Card.Body>
                                <div style={{ display: 'inline-block', alignContent: 'center' }}>
                                    <Card.Img variant="top" style={{ width: '60px', hight: '60px', borderRadius: '50px', padding: '0' }} src="https://as1.ftcdn.net/v2/jpg/04/62/16/28/1000_F_462162871_R1r5tvA8bUuDYhXz1XpqoeSwGJVlmk1o.jpg" />
                                    <Card.Title style={{ display: 'inline-block', paddingLeft: '10px', marginRight: '245px' }}>Mr. Raju
                                        <p style={{ fontSize: '16px', color: ' rgba(17, 17, 17, 0.6)' }}>Mar 14 (4 Days ago)</p>
                                    </Card.Title>
                                    <Card.Text style={{ display: 'inline-block' }}>
                                        <p style={{ display: 'inline-block', color: ' rgba(17, 17, 17, 0.6)' }}>05 min read</p>
                                        <a href="" style={{ marginLeft: '20px' }} className="bookmark"> <FontAwesomeIcon icon={faBookmark} /></a>
                                    </Card.Text>
                                </div>
                                <Card.Text>
                                    <h3 style={{ fontSize: '35px', color: '#111111', fontWeight: '600', paddingTop: '10px' }}>How to get your first job as a self-taught programmer</h3>
                                    <p style={{ fontSize: '17px', paddingTop: '10px', color: 'color: rgba(17, 17, 17, 0.6)' }}>#beginners  #programming</p>
                                </Card.Text>
                                <Card.Text>
                                    <h5 style={{ color: '#6047EC' }}>Mark as read</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;