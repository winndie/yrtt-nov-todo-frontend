import { ADD_TASK } from '../constants/action-types'

const initialState = {
  tasks: [],
  remoteTasks: []
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TASK) {
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    })
  }

  if (action.type === 'DATA_LOADED') {
    return Object.assign({}, state, {
      remoteTasks: state.remoteTasks.concat(action.payload)
    })
  }
  return state
}

export default rootReducer
