import { combineReducers }        from 'redux'
import { reducer as formReducer } from 'redux-form'
import languageReducer            from './languageReducer'

export default combineReducers({
  form: formReducer,
  languages: languageReducer
})