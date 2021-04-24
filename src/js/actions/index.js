import { ADD_TASK } from '../constants/action-types'
import axios from 'axios'
const url = 'https://winndie.github.io/data/todo.json'

export function addTask(payload) {
  return { type: ADD_TASK, payload }
}

export function getData() {
  return async function(dispatch) {
    const result = await axios.get(url)
    return dispatch({ type: 'DATA_LOADED', payload: result.data })
  }
}
