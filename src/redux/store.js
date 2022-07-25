import { configureStore } from "@reduxjs/toolkit";
import beer from "./slices/beerSlice";

export const store = configureStore({
  reducer: { beer },
});
