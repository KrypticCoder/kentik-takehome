import { createReducer } from "@reduxjs/toolkit";
import { initialRootState } from "store";
import { setYear } from "store/actions/main";

export const mainReducer = createReducer(initialRootState, (builder) => {
  builder.addCase(setYear, (state, action) => {
    state.year = action.payload;
  });
});
