import { configureStore } from '@reduxjs/toolkit';
import specReducer from "../reducers/specReducer.js";
import adminReducer from "../reducers/adminReducer.js";
import teachersReducer from "../reducers/teachersReducer.js";
import graduatesReducer from '../reducers/graduateReducer.js';
import questoinsReducer from '../reducers/questionReducer.js';
import newsReducer from '../reducers/newsReducer.js';

export const store = configureStore({
  reducer: {
    spec: specReducer,
    admin: adminReducer,
    teachers: teachersReducer,
    graduates: graduatesReducer,
    questions: questoinsReducer,
    news: newsReducer,
  },
});
