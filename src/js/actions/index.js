import * as types from '../constants/action-types'
import axios from 'axios'
const url = 'https://winndie.github.io/data/todo.json'

export function addTask(payload) {
  console.log('actions addTask>>>' + payload[0].task)
  return { type: types.ADD_TASK, payload }
}

export function searchTask(payload) {
  console.log('actions searchTask>>>' + payload.filter)
  return { type: types.SEARCH_TASK, payload }
}

export function emptyTasks() {
  console.log('actions emptyTasks>>>')
  return { type: types.EMPTY_TASKS }
}

export function getTasks() {
  return async function (dispatch) {
    try {
      const result = await axios.get(url)
      console.log('actions getTasks>>>' + result.data[0].task)
      return dispatch({ type: types.LOADED_TASKS, payload: result.data })
    } catch (error) {
      return dispatch({ type: types.ENDPOINT_ERROR, payload: [] })
    }
  }
}
