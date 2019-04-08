const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLETE_TASK = 'COMPLETE_TASK'

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
          ...state.tasks
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