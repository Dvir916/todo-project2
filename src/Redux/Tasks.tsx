import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export interface TasksState {
  task: string
  TaskList: string[]
}

const initialState: TasksState = {
  task: '',
  TaskList: [],
}

export const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    eraseTask:(state: any)=>{
      state.task = ''
    },

    taskInsert:(state:any,  action: PayloadAction<number>)=>{
      console.log(action.payload)
      state.task = state.task + action.payload
    },

    insertTaskList:(state:any,action:PayloadAction<string>)=>{
      state.TaskList.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { eraseTask,taskInsert,insertTaskList } = tasksSlice.actions

export default tasksSlice.reducer