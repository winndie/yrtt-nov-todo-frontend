import * as type from '../constants/action-types'
import axios from 'axios'
const url = 'https://winndie.github.io/data/todo.json'

export function addTask(payload) {
  return { type: type.ADD_TASK, payload }
}

export function searchTask(payload) {
  return { type: type.SEARCH_TASK, payload }
}

export function getData() {
  return async function(dispatch) {
    try {
      const result = await axios.get(url)
      return dispatch({ type: type.LOADED_TASK, payload: result.data })        
    } catch (error) {
      return dispatch({ type: type.ENDPOINT_ERROR, payload: [] })              
    }
  }
}
