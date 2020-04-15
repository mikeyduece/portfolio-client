// Dependencies
import './TalkingPoint.scss'
import React              from 'react'
import {
  GiSpeedometer,
  GiRocketFlight
}                         from 'react-icons/gi'
import { MdDevicesOther } from 'react-icons/md'

const TalkingPointList = () => {
  return (
    <div className='fade-in mb-5 d-flex flex-wrap flex-sm-nowrap justify-content-around'>
      <div className='hex-container d-flex flex-column align-items-center m-3'>
        <div className='hexagon'>
          <div className='speedometer-icon-container'>
            <GiSpeedometer className='icon' />
          </div>
        </div>
        <div className='text-center mt-3'>
          <h5>Performance</h5>
          <p>Prioritize performant queries on the backend</p>
        </div>
      </div>
      <div className='hex-container d-flex flex-column align-items-center m-3'>
        <div className='hexagon'>
          <div className='speedometer-icon-container'>
            <MdDevicesOther className='icon' />
          </div>
        </div>
        <div className='text-center mt-3'>
          <h5>Responsive</h5>
          <p>Mobile first development, ensuring large and small screen access</p>
        </div>
      </div>
      <div className='hex-container d-flex flex-column align-items-center m-3'>
        <div className='hexagon'>
          <div className='speedometer-icon-container'>
            <GiRocketFlight className='icon' />
          </div>
        </div>
        <div className='text-center mt-3'>
          <h5>Dynamic</h5>
          <p>Making pages from to life</p>
        </div>
      </div>

    </div>
  )
}

export default TalkingPointList