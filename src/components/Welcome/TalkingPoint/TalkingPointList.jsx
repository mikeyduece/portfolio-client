// Dependencies
import './TalkingPoint.scss'
import React             from 'react'
import { GiSpeedometer } from 'react-icons/gi'

const TalkingPointList = () => {
  return (
    <div className='d-flex flex-row flex-wrap fade-in justify-content-around'>
      <div className='pt-wrapper'>
        <div className='talking-points'>
          <GiSpeedometer className='icon' />
        </div>
      </div>
      <div className='pt-wrapper'>
        <div className='talking-points'>
          <GiSpeedometer className='icon' />
        </div>
      </div>
      <div className='pt-wrapper'>
        <div className='talking-points'>
          <GiSpeedometer className='icon' />
        </div>
      </div>
      <div className='pt-wrapper'>
        <div className='talking-points'>
          <GiSpeedometer className='icon' />
        </div>
      </div>
    </div>
  )
}

export default TalkingPointList