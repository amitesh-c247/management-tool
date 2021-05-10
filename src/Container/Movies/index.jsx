import React from 'react';
import { connect } from "react-redux";
import MovieComponents from '../../Components/movies'
import {moviesRequest} from "../../Redux/Action"

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: [],
        };
    }
    componentDidMount() {
      this.getmoviesList();
    }

    getmoviesList = async()=>{
      try {
        this.props.moviesRequest()
      }
      catch(error){
        console.log(error,"error");
      }
    }

    render() {
      console.log(this.props,"this.props")
      return (
          <>
            <MovieComponents {...this.props}/>
          </>
      );
    }
}


const mapStateToProps = state => ({
  moviesData:state.moviesInfoReducer.moviesInfo
});

const mapDispatchToProps = dispatch => ({
  moviesRequest: data => {
    dispatch(moviesRequest(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);


  