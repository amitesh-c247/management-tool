import { handleActions } from "redux-actions";
import { moviesAction } from "../Action";

const initialState = {
    moviesInfo: [],
    moviesDetail:{}
};

export const moviesInfoReducer = handleActions(
  {
    [moviesAction.MOVIES_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [moviesAction.MOVIES_SUCCESS]: (state, { payload }) => ({
      ...state,
      moviesInfo: payload,
    }),
    [moviesAction.MOVIES_DETAIL_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [moviesAction.MOVIES_DETAIL_SUCCESS]: (state, { payload }) => ({
      ...state,
      moviesDetail: payload,
    }),
  },
  initialState
);
