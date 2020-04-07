import api               from '../clients/api'
import {FETCH_LANGUAGES} from './types'

export const fetchLanguages = () => async dispatch => {
  const response = await api.get('/languages')
  dispatch({type: FETCH_LANGUAGES, payload: response.data})
}