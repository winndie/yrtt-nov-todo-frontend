import * as type from '../constants/action-types'

const initialState = {
  tasks: [],
  remoteTasks: []
}

function rootReducer(state = initialState, action) {
  if (action.type === type.ADD_TASK) {
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    })
  }

  if (action.type === type.LOADED_TASK) {
    return Object.assign({}, state, {
      remoteTasks: state.remoteTasks.concat(action.payload)
    })
  }
  return state
}

export default rootReducer
