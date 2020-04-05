// Dependencies
import './About.scss'
import React          from 'react'
import Flip           from 'react-reveal/Flip'
import Hexagon        from 'react-hexagon'
import Img            from 'react-image'
import { withNavbar } from '../withNavbar'

const About = () => {
  return (
    <div className='about d-flex flex-column align-items-center'>
        <Flip right cascade>
          <Hexagon style={ { stroke: 'red' } }
                   backgroundImage='https://portfolio-client-development.s3.amazonaws.com/images/me.jpeg'
                   backgroundScale={ 1.05 }
          />
        </Flip>
      <div
        className='d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center w-100'>
        <div className='d-flex flex-column justify-content-md-between align-items-center align-items-md-start'>
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