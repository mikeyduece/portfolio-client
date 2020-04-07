// Dependencies
import './About.scss'
import React            from 'react'
import { withNavbar }   from '../withNavbar'
import TalkingPointList from './TalkingPoint/TalkingPointList'
import Profile          from './Profile/Profile'

const About = () => {
  return (
    <div className='about d-flex flex-column align-items-center justify-content-between container'>
      <h1 className='mt-3 mb-5' id='heading'>About</h1>
      <TalkingPointList />
      <Profile />
    </div>
  )
}

export default withNavbar(About)