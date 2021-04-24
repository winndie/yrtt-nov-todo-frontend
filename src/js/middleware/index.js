import { ADD_TASK } from '../constants/action-types'

const forbiddenWords = ['spam', 'money']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_TASK) {
        console.log('middleware addTask>>>'+action.payload.length+' '+action.payload[0].id)        
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
