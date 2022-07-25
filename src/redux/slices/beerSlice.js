import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBeers = createAsyncThunk(
  "beer/fetchBeers",
  async (params) => {
    const { searchField, page } = params;
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?beer_name=${searchField}&page=${page}&per_page=24`
    );
    return data;
  }
);
export const fetchFirstUpdate = createAsyncThunk(
  "beer/fetchFirstUpdate",
  async (params) => {
    const { page } = params;
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=24`
    );
    return data;
  }
);

export const beerSlice = createSlice({
  name: "beer",
  initialState: {
    beers: [],
    searchField: "",
    page: 1,
  },
  reducers: {
    setSearch(state, action) {
      state.searchField = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchBeers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBeers.fulfilled]: (state, action) => {
      state.status = "success";
      state.beers = action.payload;
    },
    [fetchBeers.rejected]: (state, action) => {
      state.status = "error";
    },
    [fetchFirstUpdate.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFirstUpdate.fulfilled]: (state, action) => {
      state.status = "success";
      state.beers = action.payload;
    },
    [fetchFirstUpdate.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const { setSearch, setPage } = beerSlice.actions;

export default beerSlice.reducer;
