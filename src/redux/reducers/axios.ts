import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAsyncState } from '../type';

// Define the initial state
const initialState : IAsyncState = {
  data: null,
  error: null,
  loading: false,
};

// Define the async thunk for fetching data
export const fetchData = createAsyncThunk('fetchData', async (url:string) => {
  const response = await axios.get(url);
  return response.data;
});

// Define the async thunk for posting data
export const postData = createAsyncThunk('postData', async (params:{url:string; data:object}) => {
  const response = await axios.post(params.url, params.data);
  return response.data;
});

export const deleteData = createAsyncThunk('deleteData', async (url:string) => {
    const response = await axios.post(url);
    return response.data;
  });

export const patchData = createAsyncThunk('patchData', async (params:{url:string; data:object}) => {
    const response = await axios.patch(params.url, params.data);
    return response.data;
  });

// Define the slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(patchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(patchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

// Export the reducer
export default dataSlice.reducer;