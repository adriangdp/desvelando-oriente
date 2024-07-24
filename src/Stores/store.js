import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../Slices/postsSlice";
import lastPostReducer from "../Slices/recentPostSlice";
import appVars from '../Slices/appVars';

export default configureStore({
  reducer: {
    postStored: postsReducer,
    lastPost: lastPostReducer,
    applicationVars : appVars
  },
});
