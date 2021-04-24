import * as type from '../constants/action-types'

const forbiddenWords = ['spam', 'money']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === type.ADD_TASK) {
        console.log('middleware ADD_TASK>>>'+action.payload[0].task)        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        )
        if (foundWord.length) {
          return dispatch({ type: 'FOUND_BAD_WORD' })
        }
      }
      return next(action)
    }
  }
}

export function searchMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === type.SEARCH_TASK) {
        console.log('middleware SEARCH_TASK payload>>>'+action.payload[0].task)        
        console.log('middleware SEARCH_TASK filter>>>'+action)        
      }
      return next(action)
    }
  }
}
