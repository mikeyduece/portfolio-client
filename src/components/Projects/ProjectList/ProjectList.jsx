// Dependencies
import './ProjectList.scss'
import React          from 'react'
import pinnedItems    from './pinnedItems'
import { withNavbar } from '../../withNavbar'
import ProjectCard    from '../ProjectCard/ProjectCard'

const ProjectList = () => {

  return (
    <div className='container projects d-flex flex-column'>
      <h1 className='mt-3 mb-5' id='heading'>Projects</h1>
      <div className='d-flex flex-wrap justify-content-center pinned-item-container'>
        { pinnedItems.map(item => <ProjectCard item={ item } key={ item.name } />) }
      </div>
    </div>
  )
}

export default withNavbar(ProjectList)