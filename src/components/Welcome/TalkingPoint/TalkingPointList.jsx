// Dependencies
import './TalkingPoint.scss'
import React             from 'react'
import { GiSpeedometer } from 'react-icons/gi'

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
          <h5>Fast</h5>
          <p>Performant queries are my priority</p>
        </div>
      </div>
      <div className='hex-container d-flex flex-column align-items-center m-3'>
        <div className='hexagon'>
          <div className='speedometer-icon-container'>
            <GiSpeedometer className='icon' />
          </div>
        </div>
        <div className='text-center mt-3'>
          <h5>Fast</h5>
          <p>Performant queries are my priority</p>
        </div>
      </div>
      <div className='hex-container d-flex flex-column align-items-center m-3'>
        <div className='hexagon'>
          <div className='speedometer-icon-container'>
            <GiSpeedometer className='icon' />
          </div>
        </div>
        <div className='text-center mt-3'>
          <h5>Fast</h5>
          <p>Performant queries are my priority</p>
        </div>
      </div>
      <div className='hex-container d-flex flex-column align-items-center m-3'>
        <div className='hexagon'>
          <div className='speedometer-icon-container'>
            <GiSpeedometer className='icon' />
          </div>
        </div>
        <div className='text-center mt-3'>
          <h5>Fast</h5>
          <p>Performant queries are my priority</p>
        </div>
      </div>
    </div>
  )
}

export default TalkingPointList