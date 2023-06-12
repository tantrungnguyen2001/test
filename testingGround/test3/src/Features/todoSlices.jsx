import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {id: 1, title: 'Lau nhà', completed: false},
    {id: 2, title: 'Quét nhà', completed: true},
    {id: 3, title: 'Giặt giũ', completed: false},
  ],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    editTodo: (state, action) => {
      state.tasks.map(task => {
        if(task.id == action.payload.id){
          task.title = action.payload.title
        }
      })
    },
    toggleTodo: (state, action) => {
      state.tasks.map(task => {
        if(task.id === action.payload.id){
          task.completed = !action.payload.completed
        }
      })
    }
  }
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer