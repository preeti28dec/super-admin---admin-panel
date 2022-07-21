import React from 'react'
import Header from './header'
import LeftSideBar from './leftSideBar'
import RightSideBar from './rightSideBar'

function Dashboard() {
    return (
        <>
            <div className='main'>
            <div className='bg-sky-100'><Header/></div>
                
                <div className='main_container '>
                    <div className='left-side-bar bg-sky-200'>
                        <LeftSideBar />
                    </div>
                    <div className='content_section bg-blue-100'>
                        <RightSideBar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
