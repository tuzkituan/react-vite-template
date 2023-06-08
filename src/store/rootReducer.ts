// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../services/api/api';
import authReducer from '../features/authentication/authSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  // Add more reducers from other features here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
