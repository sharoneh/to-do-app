import { AsyncStorage } from 'react-native';

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const SET_TASKS_FROM_STORAGE = 'SET_TASKS_FROM_STORAGE'
export const APP_MOUNT = 'APP_MOUNT'
export const APP_UPDATE = 'APP_UPDATE'

const INITIAL_STATE = {
  inputValue: '',
  tasks: []
}

export default (state = INITIAL_STATE, action) => {
  const { payload } = action
  
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload
      }
    case ADD_TASK:
      return {
        ...state,
        inputValue: '',
        tasks: [
          {
            name: state.inputValue,
            complete: false
          },
          ...state.tasks.slice(0)
        ]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, payload),
          ...state.tasks.slice(payload + 1)
        ]
      }
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, payload),
          ...state.tasks.slice(payload + 1),
          {
            ...state.tasks[payload],
            complete: !state.tasks[payload].complete
          }
        ]
      }
    case SET_TASKS_FROM_STORAGE:
      return {
        ...state,
        tasks: payload
      }
    default:
      return state
  }
}

export const changeInputValue = text => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: text
  }
}

export const addTask = () => {
  return {
    type: ADD_TASK
  }
}

export const deleteTask = index => {
  return {
    type: DELETE_TASK,
    payload: index
  }
}

export const completeTask = index => {
  return {
    type: COMPLETE_TASK,
    payload: index
  }
}

export const appMount = () => {
  return { type: APP_MOUNT }
}

export const appUpdate = () => {
  return { type: APP_UPDATE }
}

export const getTasksFromStorage = async () => {
  try {
    const tasks = await AsyncStorage.getItem('to-do-list')
    
    return JSON.parse(tasks)
  } catch (e) {
    console.log(e)
  }
}

export const saveTasksToStorage = async (tasks) => {
  try {
    await AsyncStorage.setItem('to-do-list', JSON.stringify(tasks))
  } catch (e) {
    console.log(e)
  }
}