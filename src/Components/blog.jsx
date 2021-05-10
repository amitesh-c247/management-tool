import React from 'react';
import {Card, Row , Col, Container} from 'react-bootstrap';


class BlogComponents extends React.Component {
    handleClick =(id)=>{
        this.props.history.push(`/blog/detail/${id}`)
    }
    render() {
        const {blogData} = this.props;
      return (
          <>
            <Container>
             <div className={"about-warp"}>
                 <h1 className={"text-center pt-4 pb-4"}>Blog</h1>
                <Row>
                    {(blogData && blogData.length) ? blogData[0].map((data,index) =>
                    <Col md={4} sm={4} key={index}>
                        <Card className={"mb-4"}>
                            <Card.Body>
                                <Card.Title className={"text-capitalize"}>{data.title}</Card.Title>
                                <Card.Text>
                                    <img src={data.url} width={"100%"} alt={data.url}/>
                                </Card.Text>
                                <span onClick={() => this.handleClick(data.id)} className={"btn btn-success"}>Details</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    ) : "In progress"}
                </Row>
             </div>
             </Container>
          </>
      );
    }
}

export default BlogComponents;