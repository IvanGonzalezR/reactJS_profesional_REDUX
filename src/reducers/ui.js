import { SET_LOADING } from "../actions/types";
import { enableAllPlugins } from 'immer';

enableAllPlugins();

const initialState = {
  loading: false,
};

const uiReducer = (draft = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      draft.loading = action.payload
      return draft;
    default:
      return draft;
  }
};

export { uiReducer };