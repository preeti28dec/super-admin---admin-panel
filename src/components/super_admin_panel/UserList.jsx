import React from 'react'

function UserList() {
  const item = localStorage.getItem("userRegister");
  const parsedItem = JSON.parse(item);
  console.log(parsedItem, "login data ");

  return (



    <div className='content_section bg-sky-500'>
      <span>Admin registration Data</span>
      {parsedItem.map((item) =>
        <div >
          <div>{item.name}</div>
        </div>
      )}
    </div>



  )
}

export default UserList
