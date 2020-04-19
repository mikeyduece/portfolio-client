import api from '../clients/api'
import {
  FETCH_LANGUAGES,
  SEND_CONTACT_MAILER
}          from './types'

export const fetchLanguages = () => async dispatch => {
  const response = await api.get('/api/v1/languages')
  dispatch({ type: FETCH_LANGUAGES, payload: response.data })
}

export const sendContactMailer = formValues => async dispatch => {
  const response = await api.post('/contact', { ...formValues })

  dispatch({ type: SEND_CONTACT_MAILER, payload: response.data })
}