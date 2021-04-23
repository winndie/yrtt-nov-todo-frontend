import { ADD_ARTICLE } from "../constants/action-types";
import axios from 'axios';
const url = 'https://winndie.github.io/data/todo.json'

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return async function(dispatch) {
    // return fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.data)
    //   .then(data => {
    //     console.log('getData>>>'+data.length)
    //     dispatch({ type: "DATA_LOADED", payload: data });
    //   })
    const result = await axios.get(url)
    console.log("getData>>>"+result.data.length)
    return dispatch({ type: "DATA_LOADED", payload: result.data })
  }
}
