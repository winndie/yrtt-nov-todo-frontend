import * as types from '../constants/action-types'
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
  return function (dispatch) {
    try {
      fetch(url)
          .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json()
          })
          .then(json => {
            console.log('actions getTasks>>>' + json[0])
            return dispatch({ type: types.LOADED_TASKS, payload: json })      
          })
    } catch (error) {
      return dispatch({ type: types.ENDPOINT_ERROR, payload: [] })
    }
  }
}
