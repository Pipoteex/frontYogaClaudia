import React from 'react'
import { AboutComision } from './components/AboutComision'
import { NavBarComision } from './components/NavBarComision'
import { WelcomeComision } from './components/WelcomeComision'

export const ComisionYoga = () => {
  return (
    <>
        <NavBarComision></NavBarComision>
        <WelcomeComision></WelcomeComision>
        <AboutComision></AboutComision>
    </>
    
  )
}
