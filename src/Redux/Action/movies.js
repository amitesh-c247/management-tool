import { createAction } from "redux-actions";

export const moviesAction = {
  MOVIES_REQUEST: "Movies Requested!",
  MOVIES_SUCCESS: "Movies Success!",
  MOVIES_FAILED: "Movies Failed!",
  MOVIES_DETAIL_REQUEST: "Movies Detail Requested!!",
  MOVIES_DETAIL_SUCCESS: "Movies Detail Success!",
  MOVIES_DETAIL_FAILED: "Movies Detail Failed!",
};

export const moviesRequest = createAction(moviesAction.MOVIES_REQUEST);
export const moviesSuccess = createAction(moviesAction.MOVIES_SUCCESS);

export const moviesDetailRequest = createAction(moviesAction.MOVIES_DETAIL_REQUEST);
export const moviesDetailSuccess = createAction(moviesAction.MOVIES_DETAIL_SUCCESS);

export const moviesFailed = createAction(moviesAction.MOVIES_FAILED);
export const moviesDetailFailed = createAction(moviesAction.MOVIES_DETAIL_FAILED);
