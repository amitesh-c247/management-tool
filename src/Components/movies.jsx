import React from 'react';
import {Card, Row , Col, Container, Form, InputGroup, Button} from 'react-bootstrap';


class MovieComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            filterResult:""
        };
    }

    handleClick =(id)=>{
        this.props.history.push(`/blog/detail/${id}`)
    }
    handleChange = (e)=>{
        this.setState({ 
            searchValue: e.target.value
        });
        this.filterFunction(this.state.searchValue)
    }
    filterFunction = (query)=>{
        const {moviesData} = this.props;
        const result = moviesData[0].filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        this.setState({
            filterResult : result
        })
        console.log(result,"result")
    }

    render() {
        const {moviesData} = this.props;
        const {searchValue, filterResult} = this.state
        //console.log(moviesData[0],"moviesData[0]")
        const dataArray = moviesData[0];
      return (
          <>
            <Container>
             <div className={"about-warp"}>
                 <h1 className={"text-center pt-4 pb-4"}>Movie</h1>
                 <Row>
                    <Col>
                        <Card className={"mb-4"}>
                            <Card.Body>
                                <InputGroup className="mb-0">
                                    <Form.Control 
                                    size="lg" 
                                    type="text" onChange={this.handleChange} 
                                    placeholder="Search products" 
                                    value={searchValue}
                                    />
                                    <InputGroup.Append>
                                        <Button> Search</Button >
                                    </InputGroup.Append>
                                </InputGroup>
                                {searchValue ? 
                                <ul className={'suggestion-box'}>
                                {(dataArray && dataArray.length) ? dataArray.map((data,index) =>
                                    <li key={index}>{data.title}</li>) : <li>No result</li>
                                }
                                </ul>
                                : ''}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {(dataArray && dataArray.length) ? dataArray.map((data,index) =>
                    <Col md={4} sm={4} key={index}>
                        <Card className={"mb-4"}>
                            <Card.Body>
                                <Card.Title className={"text-capitalize"}>{data.title}</Card.Title>
                                <Card.Text>
                                    <img src={data.image} width={"100%"} alt={data.url} style={{height: '300px'}}/>
                                </Card.Text>
                                {/* <span onClick={() => this.handleClick(data.id)} className={"btn btn-success"}>Details</span> */}
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

export default MovieComponents;