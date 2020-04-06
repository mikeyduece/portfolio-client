// Dependencies
import './About.scss'
import React            from 'react'
import Img              from 'react-image'
import { withNavbar }   from '../withNavbar'
import TalkingPointList from '../Welcome/TalkingPoint/TalkingPointList'

const About = () => {
  return (
    <div className='about d-flex flex-column align-items-center justify-content-between container'>
      <h1 className='mt-3 mb-5' id='heading'>About</h1>
      <TalkingPointList />
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
    </div>
  )
}

export default withNavbar(About)