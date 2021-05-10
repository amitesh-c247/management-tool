import React from 'react';
import { connect } from "react-redux";
import BlogComponents from '../../Components/blog'
import {blogRequest} from "../../Redux/Action"

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: [],
        };
    }
    componentDidMount() {
      this.getBlogImages();
    }

    getBlogImages = async()=>{
      try {
        this.props.blogRequest()
      }
      catch(error){
        console.log(error,"error");
      }
    }

    render() {
      return (
          <>
            <BlogComponents {...this.props}/>
          </>
      );
    }
}


const mapStateToProps = state => ({
  blogData:state.blogInfoReducer.blogInfo
});

const mapDispatchToProps = dispatch => ({
  blogRequest: data => {
    dispatch(blogRequest(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);


  