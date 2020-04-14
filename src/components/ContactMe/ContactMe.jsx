// Dependencies
import React, { useState } from 'react'
import {
  TextField,
  Button
}                          from '@material-ui/core'
import {
  Field,
  reduxForm
}                          from 'redux-form'

import { withNavbar }        from '../withNavbar'
import { sendContactMailer } from '../../actions'
import {
  theme,
  useStyles
}                            from '../theme'
import { ThemeProvider }     from 'react-bootstrap'

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className='ui error message'>
        <div className='header'>
          { error }
        </div>
      </div>
    )
  }
}

const renderInput = ({ input, label, meta }) => {
  const className = `field ${ meta.error && meta.touched ? 'error' : '' }`

  return (
    <div className={ className }>
      <label>{ label }</label>
      <input { ...input } autoComplete='off' />
      { renderError(meta) }
    </div>
  )
}

const onSubmit = formValues => {
  sendContactMailer(formValues)
}

const ContactMe = props => {
  const { pristine, submitting } = props
  const classes = useStyles()
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
      <TextField errortext={ `${ touched && error }` }
                 onChange={ handleChange }
                 { ...input }
                 { ...custom }
      />
    )
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className='d-flex justify-content-center'>
        <form className='' onSubmit={ onSubmit } autoComplete='off'>
          <div className='my-3'>
            <Field name='name' component={ renderTextField } label='Your Name' placeholder='Your Name' />
          </div>
          <div className='my-3'>
            <Field name='email' component={ renderTextField } label='Email' placeholder='Your Email' />
          </div>
          <div className='my-3'>
            <Field name='subject' component={ renderTextField } label='Subject' placeholder='Subject' />
          </div>
          <div className='my-3'>
            <Field name='body' component={ renderTextField } label='Body' multiline rows={ 10 } placeholder='Body'
                   variant='outlined' />
          </div>
          <Button disabled={ pristine || submitting }
                  color='primary'
                  variant='outlined'
                  className={ classes.btnOutline }
                  size="small"
                  m='auto'>
            Submit
          </Button>
        </form>
      </div>
    </ThemeProvider>
  )
}

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'email', 'subject', 'body']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export default reduxForm({
  form: 'contactMeForm',
  validate
})(withNavbar(ContactMe))