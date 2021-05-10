import { handleActions } from "redux-actions";
import { blogAction } from "../Action";

const initialState = {
  blogInfo: [],
  blogDetail:{}
};

export const blogInfoReducer = handleActions(
  {
    [blogAction.BLOG_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [blogAction.BLOG_SUCCESS]: (state, { payload }) => ({
      ...state,
      blogInfo: payload,
    }),
    [blogAction.BLOG_DETAIL_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [blogAction.BLOG_DETAIL_SUCCESS]: (state, { payload }) => ({
      ...state,
      blogDetail: payload,
    }),
  },
  initialState
);
