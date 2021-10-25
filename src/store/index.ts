import { configureStore } from '@reduxjs/toolkit';
import reduceReducers from 'reduce-reducers';
import { mainReducer } from 'store/reducers/main';

export interface RootState {
  attribute: boolean;
}

export const initialRootState: RootState = {
  attribute: false,
};

const rootReducer = reduceReducers(initialRootState, mainReducer);

export const store = configureStore({
  reducer: rootReducer,
});
