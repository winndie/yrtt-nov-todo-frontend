import * as types from '../constants/action-types'
import {searchForTasks} from '../functions/searchForTasks'

const initialState = {tasks: []}

function rootReducer(state = initialState, action) {

  if (action.type === types.ADD_TASK) {
    console.log('rootReducer ADD_TASK>>>'+action.payload[0].task)
    console.log('rootReducer ADD_TASK state>>>'+state.tasks[0].task)
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    })
  }

  if (action.type === types.SEARCH_TASK) {
    console.log('rootReducer SEARCH_TASK payload.filter>>>'+action.payload.filter)
    console.log('rootReducer SEARCH_TASK state>>>'+state.tasks[0].task)
    return Object.assign({}, state, {
      tasks: searchForTasks(state.tasks,action.payload.filter)
    })
  }

  if (action.type === types.EMPTY_TASKS) {
    console.log('rootReducer EMPTY_TASKS>>>')
    return Object.assign({}, state, {
      tasks: [],
      type: types.EMPTY_TASKS
    })
  }

  if (action.type === types.LOADED_TASKS) {
    console.log('rootReducer LOADED_TASK>>>'+action.payload[0].task)
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload),
      type: types.LOADED_TASKS
    })
  }

  return state
}

export default rootReducer
