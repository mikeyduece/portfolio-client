// Dependencies
import './Profile.scss'
import React, { useEffect } from 'react'
import Img                  from 'react-image'
import Chart                from './Chart/Chart'
import {
  useSelector,
  useDispatch
}                           from 'react-redux'
import { fetchLanguages }   from '../../../actions'

const Profile = () => {
  const languages = useSelector(state => state.languages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLanguages())

  }, [])

  return (
    <section>
      <div
        className='d-flex flex-column justify-content-center justify-content-md-between align-items-center'>
        <Chart data={Object.values(languages)}/>

        <div className='d-flex flex-column justify-content-between align-items-center align-items-md-start'
             id='profile-container'>
          <div className='text-center'>
            <p>This is my bio!</p>
            <p>Misc description</p>
          </div>

          <Img src='https://portfolio-client-development.s3.amazonaws.com/images/me.jpeg'
               className='rounded-circle w-50'
               loader={ <div id='loader-container'>
                 <div className="spinner-border" style={ { width: '3rem', height: '3rem' } } role="status">
                   <span className="sr-only">Loading...</span>
                 </div>
               </div> }
          />
        </div>


      </div>

    </section>
  )
}

export default Profile