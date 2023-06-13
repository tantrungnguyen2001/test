import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  }
})

export default userSlice.reducer