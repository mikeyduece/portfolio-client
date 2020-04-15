import React, { useState }   from 'react'
import {
  Field,
  reduxForm
}                            from 'redux-form'
import TextField             from '@material-ui/core/TextField'
import TextareaAutosize      from '@material-ui/core/TextareaAutosize'
import asyncValidate         from './Form/asyncValidate'
import { withNavbar }        from '../withNavbar'
import { useDispatch }       from 'react-redux'
import { sendContactMailer } from '../../actions'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
                           input,
                           label,
                           meta: { touched, error },
                           ...custom
                         }) => (
  <TextField
    hintText={ label }
    floatingLabelText={ label }
    errorText={ touched && error }
    margin='normal'
    fullWidth
    required
    { ...input }
    { ...custom }
  />
)

const renderTextArea = ({
                          input,
                          label,
                          meta: { touched, error },
                          ...custom
                        }) => (
  <TextareaAutosize rowsMin={ 10 }
                    placeholder="Email Body"
                    hintText={ label }
                    floatingLabelText={ label }
                    errorText={ touched && error }
                    margin='normal'
                    className='w-100'
                    { ...input }
                    { ...custom }

  />

)

const ContactMe = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  const [value, setValue] = useState('')
  const handleChange = e => setValue(e.target.value)
  const dispatch = useDispatch()


  return (
    <div className='container d-flex justify-content-center'>
      <form onSubmit={ handleSubmit(formValues => dispatch(sendContactMailer(formValues))) } className='w-100'>
        <div>
          <Field
            name="contact.name"
            component={ renderTextField }
            label="Your Name"
            placeholder='Your Name'
            value={ value }
            onChange={ handleChange }
          />
        </div>
        <div>
          <Field name="contact.email"
                 component={ renderTextField }
                 label="Your Email"
                 placeholder='Your Email'
                 value={ value }
                 onChange={ handleChange }
          />
        </div>
        <div>
          <Field name="contact.subject"
                 component={ renderTextField }
                 label="Subject"
                 placeholder='Subject'
                 value={ value }
                 onChange={ handleChange }
          />
        </div>
        <div>
          <Field
            name="contact.body"
            component={ renderTextArea }
            label="Body"
            multiLine
            rows='10'
            variant='outlined'
            value={ value }
            onChange={ handleChange }
            fullWidth
          />
        </div>
        <div>
          <button type="submit" disabled={ pristine || submitting }>
            Submit
          </button>
          <button type="button" disabled={ pristine || submitting } onClick={ reset }>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'contactMeForm', // a unique identifier for this form
  validate,
  asyncValidate
})(withNavbar(ContactMe))