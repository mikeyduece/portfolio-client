// Dependencies
import './ProjectList.scss'
import React, { useState } from 'react'
import pinnedItems         from './pinnedItems'
import { withNavbar }      from '../../withNavbar'
import ProjectCard         from '../ProjectCard/ProjectCard'
import {
  useTrail,
  animated
}                          from 'react-spring'

const config = { mass: 5, tension: 2000, friction: 200 }

const ProjectList = () => {
  const trail = useTrail(pinnedItems.length, {
    config,
    opacity: 1,
    x: 20,
    height: 200,
    from: { opacity: 0, x: 40, height: 0 }
  })

  return (
    <div className='container projects d-flex flex-column'>
      <h1 className='mt-3 mb-5' id='heading'>Projects</h1>
      <div className='d-flex flex-wrap justify-content-center pinned-item-container'>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={pinnedItems[index].name}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{<ProjectCard key={pinnedItems[index].name} item={pinnedItems[index]}/>}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default withNavbar(ProjectList)