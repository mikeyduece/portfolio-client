// Dependencies
import './About.scss'
import React            from 'react'
import Img              from 'react-image'
import { withNavbar }   from '../withNavbar'
import TalkingPointList from '../Welcome/TalkingPoint/TalkingPointList'

const About = () => {
  return (
    <div className='about d-flex flex-column align-items-center justify-content-between'>
      <h1 className='mt-3 mb-5' id='heading'>About</h1>
      <TalkingPointList />
      
      <div
        className='d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-around align-items-center w-100'>
        <div className='d-flex flex-column justify-content-between align-items-center align-items-md-start'>
          <Img src='https://portfolio-client-development.s3.amazonaws.com/images/me.jpeg'
               className='rounded-circle w-50' />
          <div>This is my bio!!!!</div>
          <div>Misc</div>

        </div>

        <div>Skill Chart</div>

      </div>

    </div>
  )
}

export default withNavbar(About)