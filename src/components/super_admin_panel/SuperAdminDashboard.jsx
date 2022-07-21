import React from 'react'
import Header from '../pages/header'
import LeftSideBar from '../pages/leftSideBar'

function SuperAdminDashboard() {
  return (

    <div className='main'>
      <Header/>
      <div className='main_container '>
        <div className='left-side-bar'>
          <LeftSideBar/>
        </div>
        <div className='content_section bg-sky-200'>
          SUPER ADMIN PANEL
        </div>
      </div>
    </div>

  )
}

export default SuperAdminDashboard
