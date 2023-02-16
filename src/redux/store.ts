import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducers/counter"
import dataReducer, { fetchData, postData, patchData, deleteData } from './reducers/axios';

const store = configureStore({
    reducer :{
        //add all slices to the store
        counter : counterReducer,
        data: dataReducer
    }
})

export default store;
// type of the state for the useselector hook
export type RootState = ReturnType<typeof store.getState>

// type of the dispatch
export type AppDispatch = typeof store.dispatch

// function handlePost() {
//     const url = 'https://example.com/api/data';
//     const data = { foo: 'bar' };
//     dispatch(postData({ url, data }));
//   }