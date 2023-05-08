import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[]
}

export const dashBoardSlice = createSlice({
  name: 'dashboard_data',
  initialState,
  reducers: {
    setData: (state,{payload}) => {
      state.data=payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setData} = dashBoardSlice.actions

export default dashBoardSlice.reducer

export const getData = (state) => state.data