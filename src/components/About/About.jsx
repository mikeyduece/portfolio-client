// Dependencies
import './About.scss'
import React, { useEffect } from 'react'
import Flip                 from 'react-reveal/Flip'
import Img                  from 'react-image'
import { withNavbar }       from '../withNavbar'

const About = () => {
  return (
    <div className='about d-flex flex-column align-items-center justify-content-between'>
      <h1 className='mt-3 mb-5' id='heading'>About</h1>
      <div className='d-flex flex-row'>
        <Flip right cascade>first cell</Flip>
        <Flip right cascade>second cell</Flip>
        <Flip right cascade>third cell</Flip>
        <Flip right cascade>fourth cell</Flip>
      </div>
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