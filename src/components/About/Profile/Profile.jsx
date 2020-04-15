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
import me                   from '../../../images/me.jpeg'

const Profile = () => {
  const languages = useSelector(state => state.languages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLanguages())
  }, [])

  return (
    <section>
      <div
        className='d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-around align-items-center'>

        <div
          className='d-flex flex-column flex-md-column-reverse justify-content-center align-items-center align-items-md-start'
          id='profile-container'>
          <div className='text-center'>
            <p>To any challenge, I bring the discipline of a Marine,
               the insight of a small business owner, and the technical prowess of a Software Developer.</p>
          </div>

          <Img src={ me }
               className='rounded-circle w-50 mx-auto mb-5 mb-md-3'
               loader={ <div id='loader-container'>
                 <div className="spinner-border" style={ { width: '3rem', height: '3rem' } } role="status">
                   <span className="sr-only">Loading...</span>
                 </div>
               </div> }
          />
        </div>


        <Chart data={ Object.values(languages) } />
      </div>

    </section>
  )
}

export default Profile