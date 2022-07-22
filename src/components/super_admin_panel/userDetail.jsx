

import React from 'react'


function UserDetail() {
    const item = localStorage.getItem("userRegister");
    const parsedItem = JSON.parse(item);
    // console.log(parsedItem, "login data ");

    return (


        <div className='content_section bg-sky-500'>
            <span>Admin registration Data</span>
            {parsedItem.map((item) =>
                <div>
                    <div>{item.roll}</div>
                    <div>{item.key}</div>
                    <div>{item.key}</div>
                    <div>{item.email}</div>
                    <div>{item.name}</div>
                    <div>{item.password}</div>
                </div>
            )}
        </div>


    )
}

export default UserDetail
