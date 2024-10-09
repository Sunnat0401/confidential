import React from 'react'
import { Outlet } from 'react-router'

const Menu = () => {
  return (
    <div style={{backgroundColor:"aqua", width:"100%" , height:"500px" , display:"flex" , alignItems:"center" , justifyContent:"center"}}>
      <Outlet/>
    </div>
  )
}

export default Menu
