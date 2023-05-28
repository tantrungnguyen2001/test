import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    count: 0
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload)
      state.count+=1
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
      state.count-=1
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer