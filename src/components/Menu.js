import { Button } from 'primereact/button'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='grid'>
        <div className="col-12 text-center">
        <h3>Information Page</h3>
        <NavLink to={`/user`}><Button className='m-3 p-3'>User</Button></NavLink>
        <NavLink to={`/post`}><Button className='m-3 p-3'>Post</Button></NavLink>
        </div>
    </div>
    



  )
}

export default Menu