import React from 'react';
import BlogDetailComponents from '../../Components/blogdetail';
import { connect } from "react-redux";
import { blogDetailRequest } from "../../Redux/Action"

class BlogDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetailData: "",
    };
  }
  componentDidMount() {
    const id = this.props.history.location.pathname.split("/");
    this.getBlogDetails(id[3])
  }

  getBlogDetails = async (id) => {
    try {
      this.props.blogDetailRequest({ id: id })
    }
    catch (error) {
      console.log(error, "error");
    }
  }

  render() {
    return (
      <>
        <BlogDetailComponents {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  blogDetailData: state.blogInfoReducer.blogDetail
});

const mapDispatchToProps = dispatch => ({
  blogDetailRequest: data => {
    dispatch(blogDetailRequest(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetail);


