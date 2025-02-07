import { configureStore } from "@reduxjs/toolkit";
import DataSlice from '../slice/data'

export default configureStore({
  reducer: {data: DataSlice},
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
})