import { configureStore } from "@reduxjs/toolkit";
import reduceReducers from "reduce-reducers";
import { mainReducer } from "store/reducers/main";
import { initialYear } from "utils/constants";

export interface RootState {
  year: number;
}

export const initialRootState: RootState = {
  year: initialYear,
};

const rootReducer = reduceReducers(initialRootState, mainReducer);

export const store = configureStore({
  reducer: rootReducer,
});
