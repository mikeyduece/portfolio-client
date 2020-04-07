import api               from '../clients/api'
import {FETCH_LANGUAGES} from './types'

export const fetchLanguages = () => dispatch => {
  const response = api.get('/languages')

  dispatch({type: FETCH_LANGUAGES, payload: response.data})
}