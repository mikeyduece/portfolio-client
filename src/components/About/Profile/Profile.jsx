// Dependencies
import './Profile.scss'
import React, { useEffect } from 'react'
import Img                  from "react-image"
import {
  useSelector,
  useDispatch
} from 'react-redux'
import { fetchLanguages }   from '../../../actions'

const Profile = () => {
  const languages = useSelector(state => state.languages)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLanguages())
  }, [])
  console.log(process.env.REACT_APP_API_URL)
  console.log(languages)
  return (
    <section>
      <div
        className='d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between align-items-center mx-4'>
        <div className='d-flex flex-column justify-content-between align-items-center align-items-md-start'
             id='profile-container'>
          <Img src='https://portfolio-client-development.s3.amazonaws.com/images/me.jpeg'
               className='rounded-circle w-50'
               loader={ <div id='loader-container'>
                 <div className="spinner-border" style={ { width: '3rem', height: '3rem' } } role="status">
                   <span className="sr-only">Loading...</span>
                 </div>
               </div> }
          />
          <div className='text-center'>
            <p>This is my bio!</p>
            <p>Misc description</p>
          </div>

        </div>

        <div>Skill Chart</div>
      </div>
    </section>
  )
}

export default Profile