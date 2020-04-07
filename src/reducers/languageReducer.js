import {FETCH_LANGUAGES} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      console.log(action.payload)
      return {...state, streams: action.payload}
    default:
      return state
  }
}