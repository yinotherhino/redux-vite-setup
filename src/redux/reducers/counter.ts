import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
    //state
  name: 'counter',
  initialState,
  //reducer
  reducers: {
    //actions
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    //action with payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// destructure actions and export to be dispatched throughout the app
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer