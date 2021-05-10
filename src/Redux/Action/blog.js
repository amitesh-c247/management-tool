import { createAction } from "redux-actions";

export const blogAction = {
  BLOG_REQUEST: "Blog Requested!",
  BLOG_SUCCESS: "Blog Success!",
  BLOG_FAILED: "Blog Failed!",
  BLOG_DETAIL_REQUEST: "Blog Detail Requested!!",
  BLOG_DETAIL_SUCCESS: "Blog Detail Success!",
  BLOG_DETAIL_FAILED: "Blog Detail Failed!",
};

export const blogRequest = createAction(blogAction.BLOG_REQUEST);
export const blogSuccess = createAction(blogAction.BLOG_SUCCESS);

export const blogDetailRequest = createAction(blogAction.BLOG_DETAIL_REQUEST);
export const blogDetailSuccess = createAction(blogAction.BLOG_DETAIL_SUCCESS);

export const blogFailed = createAction(blogAction.BLOG_FAILED);
export const blogDetailFailed = createAction(blogAction.BLOG_DETAIL_FAILED);
