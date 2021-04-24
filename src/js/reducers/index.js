import * as type from '../constants/action-types'
import {searchForTasks} from '../functions/searchForTasks'

const initialState = {tasks: []}

function rootReducer(state = initialState, action) {

  if (action.type === type.ADD_TASK) {
    console.log('rootReducer ADD_TASK>>>'+action.payload[0].task)
    console.log('rootReducer ADD_TASK state>>>'+state.tasks[0].task)
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    })
  }

  if (action.type === type.SEARCH_TASK) {
    console.log('rootReducer SEARCH_TASK payload.filter>>>'+action.payload.filter)
    console.log('rootReducer SEARCH_TASK state>>>'+state.tasks[0].task)
    return Object.assign({}, state, {
      tasks: searchForTasks(state.tasks,action.payload.filter)
    })
  }

  if (action.type === type.LOADED_TASK) {
    console.log('rootReducer LOADED_TASK>>>'+action.payload[0].task)
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    })
  }
  return state
}

export default rootReducer
