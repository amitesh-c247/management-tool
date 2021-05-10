import React from 'react';
import {Card, Row , Col, Container} from 'react-bootstrap';



class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const editorData = localStorage.getItem("editordata");
        console.log(editorData,"editorData")
      return (
          <>
            <Container>
             <div className={"about-warp mb-5"}>
                 <h1 className={"text-center pt-4 pb-4"}>Contact Us</h1>
                <Row className={"justify-content-center"}>
                    <Col md={12} sm={12}>
                        <Card>
                            <Card.Body>
                                <div dangerouslySetInnerHTML={{ __html: editorData}}></div>
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

export default AboutPage;