import { createReducer } from '@reduxjs/toolkit';
import { initialRootState } from 'store';
import { mainAction } from 'store/actions/main';

export const mainReducer = createReducer(initialRootState, (builder) => {
  builder.addCase(mainAction, (state, action) => {
    state.attribute = action.payload;
  });
});
