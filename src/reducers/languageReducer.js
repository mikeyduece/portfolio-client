import _                   from 'lodash'
import { FETCH_LANGUAGES } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return { ...state, ..._.mapKeys(action.payload, 'name') }
    default:
      return state
  }
}