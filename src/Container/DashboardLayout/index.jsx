import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Row, Col, Card, Container } from "react-bootstrap";


const data = JSON.parse(localStorage.getItem("data"));
const  DashboardLayout =props=>(
      <div >
        <Header token={data && data.token ? data.token : null} {...props.children.props} />
        <Container >
          <Row>
            <Col md={"3"} sm={"3"} className={"dashboard-left "}>
              <Card className={"pt-4"}>
                <span>

                </span>
                <ul>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/editor"}>Editor</Link></li>
                </ul>
              </Card>
            </Col>
            <Col md={"9"} sm={"9"}>
              {props.children}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
)


export default DashboardLayout;