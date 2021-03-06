// Dependencies
import './Welcome.scss'
import React, {
  useState,
  useEffect
}               from 'react'
import { Link } from 'react-router-dom'

const Welcome = (props) => {
  const [drops, setDrops] = useState([])
  const [backDrops, setBackDrops] = useState([])

  const makeItRain = () => {
    //clear out everything
    document.querySelector('.rain').innerHTML = ''

    let increment = 0;
    let drops = [];
    let backDrops = [];

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops.push(
        <div key={ `drops-${ increment }` } className='drop' style={ {
          left: `${ increment }%`,
          bottom: `${ randoFiver + randoFiver - 1 + 100 }%`,
          animationDelay: `0.${ randoHundo }s`,
          animationDuration: `0.5${ randoHundo }s`
        } }>
          <div className="stem"
               style={ { animationDelay: `0.${ randoHundo }s`, animationDuration: `0.5${ randoHundo }s` } } />
          <div className="splat"
               style={ { animationDelay: `0.${ randoHundo }s`, animationDuration: `0.5${ randoHundo }s` } } />
        </div>
      )
      backDrops.push(
        <div key={ `backDrops-${ increment }` } className='drop' style={ {
          right: `${ increment }%`,
          bottom: `${ (randoFiver + randoFiver - 1 + 100) }%`,
          animationDelay: `0.${ randoHundo }s`,
          animationDuration: `0.5${ randoHundo }s`
        } }>
          <div className='stem'
               style={ { animationDelay: `0.${ randoHundo }s`, animationDuration: `0.5${ randoHundo }s` } } />
          <div className='splat'
               style={ { animationDelay: `0.${ randoHundo }s`, animationDuration: `0.5${ randoHundo }s` } } />
        </div>
      )
    }
    setDrops(drops)
    setBackDrops(backDrops)
  }

  useEffect(() => makeItRain(), [])

  return (
    <div className='welcome splat-toggle'>
      <div className='greeting'>
        <span>Hi there! I'm </span><span id='my-name'>Mike Heft</span>
      </div>
      <div className='greeting'>
        <span>I'm a Full Stack Developer</span>
      </div>
      <Link to='/about' className='btn btn-outline-light rounded-0 d-block mx-auto' id='about-btn'>
        Click Me!
      </Link>
      <div className='rain front-row'>{ drops }</div>
      <div className='rain back-row'>{ backDrops }</div>
    </div>
  )
}

export default Welcome