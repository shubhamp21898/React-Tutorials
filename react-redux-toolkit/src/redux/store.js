import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
  reducer: {
    counter:counterReducer 
  },
})

/*
Steps 
1.Create store
2.Wrap app component under Provider
3.Create slice
4.Register reducer in store
*/