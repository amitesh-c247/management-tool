import { createLogic } from "redux-logic";
import {ApiHelper} from "../../Helper/apiHelper";
import {
    blogAction,
    blogSuccess,
    blogDetailSuccess
} from "../Action";
import { Toaster } from "../../Components/Common/toast";

/**
 *
 */
const blogLogic = createLogic({
  type: blogAction.BLOG_REQUEST,
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
          const photos = [];
          photos.push(result.data);
          dispatch(blogSuccess(photos));
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

const blogDetailLogic = createLogic({
  type: blogAction.BLOG_DETAIL_REQUEST,
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
          dispatch(blogDetailSuccess(result.data));
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


export const BlogLogics = [
    blogLogic,
    blogDetailLogic
];