import React from 'react';
import {Carousel,Card, Row , Col, Container} from 'react-bootstrap';

import infoImage from "../img/info-img.jpg"

class HomeComponents extends React.Component {
    render() {
        const {slidename,aboutBlock} = this.props;
      return (
          <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{slidename.firstSlide}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>{slidename.secondSlide}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>{slidename.thirdSlide}</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
             <Container>
             <div className={"about-warp"}>
                 <h1 className={"text-center pt-4 pb-4"}>About Us</h1>
                <Row>
                    <Col md={6} sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{aboutBlock.firstBlock.title}</Card.Title>
                                <Card.Text>
                                    {aboutBlock.firstBlock.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{aboutBlock.secondBlock.title}</Card.Title>
                                <Card.Text>
                                    {aboutBlock.secondBlock.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
             </div>
             </Container>
             <div className={"info-block p-5 mt-5 mb-5 text-center"} style={{backgroundImage: "url(" + infoImage + ")"}}>
                 <h2>How to know more about life</h2>
                 <p>
                 est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla
                 </p>
             </div>
          </>
      );
    }
}

export default HomeComponents;