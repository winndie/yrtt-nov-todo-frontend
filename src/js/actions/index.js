import * as type from '../constants/action-types'
import axios from 'axios'
const url = 'https://winndie.github.io/data/todo.json'

export function addTask(payload) {
  console.log('actions addTask>>>'+payload[0].task)
  return { type: type.ADD_TASK, payload }
}

export function searchTask(payload) {
  console.log('actions searchTask>>>'+payload[0].task)
  return { type: type.SEARCH_TASK, payload }
}

export function getData() {
  return async function(dispatch) {
    try {
      const result = await axios.get(url)
      console.log('actions getData>>>'+result.data[0].task)
      return dispatch({ type: type.LOADED_TASK, payload: result.data })        
    } catch (error) {
      return dispatch({ type: type.ENDPOINT_ERROR, payload: [] })              
    }
  }
}
