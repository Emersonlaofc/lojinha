import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItem from './Components/NavItem'

function App()  {
  return (
     <>
      <NavItem/>
      <Outlet />
     </>
  )
}

export default App
