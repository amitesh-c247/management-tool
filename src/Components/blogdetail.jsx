import React from 'react';
import {Card, Row , Col, Container} from 'react-bootstrap';

class BlogDetailComponents extends React.Component {
    render() {
      const blogDetail = this.props.blogDetailData;
      return (
          <>
            <Container>
             <div className={"about-warp"}>
                 <h1 className={"text-center pt-4 pb-4"}>Blog</h1>
                <Row>
                    
                    <Col md={12} sm={12} >
                        <Card className={"mb-4"}>
                            <Card.Body>
                                <Card.Title className={"text-capitalize"}>{blogDetail.title}</Card.Title>
                                <Card.Text>
                                    <img src={blogDetail.url} alt={blogDetail.url}  width={"100%"}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
             </div>
             </Container>
          </>
      );
    }
}

export default BlogDetailComponents;