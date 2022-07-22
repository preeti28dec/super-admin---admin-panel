
import { Routes, Route, Outlet } from "react-router-dom"
import React, { useState } from 'react'
import Header from './header'
import LeftSideBar from './leftSideBar'
import Login from "../login-signup/login"
import Signup from "../login-signup/signup"
import PasswordDetil from "../super_admin_panel/passwordDetil"
import UserDetail from "../super_admin_panel/userDetail"
import UserList from '../super_admin_panel/UserList'
import { useAuth } from "../../AuthProvider/AuthProvider";


function Dashboard() {
    const { auth } = useAuth();
    const[val, setVal] =useState(auth)
    console.log('final auth -------   ',val ,' 88', auth)


    return (
        <div className='main'>
            <div className='bg-sky-100'><Header /></div>
            <div className='main_container '>
                <div className='left-side-bar bg-sky-200'>
                    <LeftSideBar />
                </div>
                <div className='content_section bg-blue-100'>
                    <div className='right_section rounded-xl'>
                        <Outlet />
                            {val === 'admin' ? 'this is for adminn ' : 'this is for super'}

                    </div>
                </div>
            </div>
        </div>
    )
}

function DashboardPage() {

    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* {auth ? <>{isAdmin ? <> */}
                <Route path="/" element={<Dashboard />}>
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/user-detail" element={<UserDetail />} />
                    <Route path="/password-detail" element={<PasswordDetil />} />
                </Route>
            {/* </>
                : <> */}
                    <Route path="/" element={<Dashboard />}>
                        <Route path="/user-list" element={<UserList />} />
                    </Route>
                {/* </>} */}
            {/* // </> : null} */}
        </Routes>
    )
}
export default DashboardPage


