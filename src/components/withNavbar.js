import React  from 'react'
import Navbar from './Navbar/Navbar'

export const withNavbar = Component => props => {

  return (
    <>
      <Navbar />
      <Component { ...props } />
    </>
  )
}