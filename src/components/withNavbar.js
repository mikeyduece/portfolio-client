import React     from 'react'
import TopNavbar from './TopNavbar/TopNavbar'

export const withNavbar = Component => props => {

  return (
    <>
      <TopNavbar { ...props } />
      <Component { ...props } />
    </>
  )
}