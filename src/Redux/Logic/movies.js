import { createLogic } from "redux-logic";
import {ApiHelper} from "../../Helper/apiHelper";
import {
    moviesAction,
    moviesSuccess,
    moviesDetailSuccess
} from "../Action";
import { Toaster } from "../../Components/Common/toast";

/**
 *
 */
const moviesLogic = createLogic({
  type: moviesAction.MOVIES_REQUEST,
  async process({ action }, dispatch, done) {
    try {
        let api = new ApiHelper();
        let result = await api.FetchFromServer(
          "https://fakestoreapi.com/products",
          "GET",
          false,
          undefined,
          undefined
        )
        if(result && result.data){
          const movies = [];
          movies.push(result.data);
          dispatch(moviesSuccess(movies));
        }
        else{
          console.log(result);
        }
      done();
    } catch (error) {
      console.log("=================");
      console.log(error);
      console.log("=================");
      Toaster("error", error)
    }
  }
});

const moviesDetailLogic = createLogic({
  type: moviesAction.MOVIES_DETAIL_REQUEST,
  async process({ action }, dispatch, done) {
    try {
        const {id} = action.payload
        let api = new ApiHelper();
        let result = await api.FetchFromServer(
          `https://jsonplaceholder.typicode.com/photos/${(id)}`,
          "GET",
          false,
          undefined,
          undefined
        )
        if(result && result.data){
          dispatch(moviesDetailSuccess(result.data));
        }
        
        else{
          console.log(result);
        }
      done();
    } catch (error) {
      console.log("=================");
      console.log(error);
      console.log("=================");
      Toaster("error", error)
    }
  }
});


export const MoviesLogics = [
    moviesLogic,
    moviesDetailLogic
];