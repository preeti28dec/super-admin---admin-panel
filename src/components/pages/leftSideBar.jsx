import React, { useState } from 'react'
import { BsPersonDashFill } from 'react-icons/bs'
import { CgUserList } from 'react-icons/cg'
import { BiCommentDetail } from 'react-icons/bi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useAuth } from "../../AuthProvider/AuthProvider";

function LeftSideBar() {
  const { roll } = useAuth();
  return (
    <div className='mx-4 my-4 font-medium'>
      <div className="" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 rounded ">


          {roll === 'super-admin' ? <>
            <span>Super Admin</span>
            <Link to="/" className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-purple-100">
              <span className='text_icon'><BsPersonDashFill className='leftSidebar-icon text-gray-500 ' /></span>
              <span className="ml-3 text_icon_text ">Dashboard</span>
            </Link>
            <Link to="/user-list" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg  transition duration-75 hover:bg-purple-100  group">
              <span className='text_icon'><CgUserList className="leftSidebar-icon text-gray-500" /></span>
              <span className="ml-4 text_icon_text">User List</span>
            </Link>
            <ul className="space-y-2">
              <li>
                <Link to="/user-detail" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500 hover:bg-purple-100">
                  <span className='text_icon'><BiCommentDetail className='leftSidebar-icon text-gray-500' /></span>
                  <span className="flex-1 ml-3 text_icon_text">User Detail</span>
                </Link>
              </li>
              <li>
                <Link to="/password-detail" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500  hover:bg-purple-100">
                  <span className='text_icon'><RiLockPasswordFill className="leftSidebar-icon text-gray-500" /></span>
                  <span className="flex-1 ml-3 text_icon_text">Password Detail</span>
                </Link>
              </li>
            </ul>

          </> : <>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
              <span className='text_icon_text'>Admin</span>
              {/* {item.roll==="admin" ? <> */}
              <Link to="/" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg   hover:bg-purple-100">
                <span className='text_icon'><BsPersonDashFill className='leftSidebar-icon text-gray-500' /></span>
                <button className="ml-3 text_icon_text">Dashboard</button>
              </Link>
              <Link to="/user-list" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500 rounded-lg  hover:bg-purple-100  group">
                <span className='text_icon'><CgUserList className='leftSidebar-icon text-gray-500' /></span>
                <span className="ml-4 text_icon_text">User List</span>
              </Link>


            </ul>

          </>}




        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
