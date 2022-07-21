import React from 'react'

import Header from '../pages/header'
import LeftSideBar from '../pages/leftSideBar'

function AdminDashboard() {
  const item = localStorage.getItem("userRegister");
  const parsedItem = JSON.parse(item);
  console.log(parsedItem, "login data ");

  return (

    <div className='main'>
      <Header />
      <div className='main_container '>
        <div className='left-side-bar'>
          <LeftSideBar />
        </div>
        <div className='content_section bg-sky-500'>
          <span>Admin registration Data</span>

          {parsedItem.map((item) =>
            <div >
              <div>{item.key}</div>
              <div>{item.email}</div>
              <div>{item.name}</div>
              <div>{item.password}</div>
            </div>
          )}


        </div>
      </div>
    </div>

  )
}

export default AdminDashboard
