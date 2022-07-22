import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";

export default function Login() {
  const { onLogin } = useAuth();
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [pass, setPassword] = useState("");

// useEffect(()=>{
//   onLogin()
// },[])
  
function userLonin(){
  onLogin(roll,name)
}
  return (
    <>

      <div className="login">
        <div className="border border-slate-200 p-12 bg-slate-200 rounded login1">
          <div className="text-center text-3xl font-bold py-6">login up</div>
          <div className="text-center mt-2">
            <input value={roll} onChange={e => setRoll(e.target.value)} type="text" placeholder="Roll" />
          </div>
          <div className="text-center">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Email" />
          </div>
          <div className="text-center mt-2">
            <input value={pass} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          </div>

          <div>
            <Link to="/signup" className='text-blue-400 text-sm ml-2'>Registration here </Link>
          </div>
          <div className="text-center mt-4" >
            <button className="bg-blue-300 py-2 px-4 rounded" type="button" onClick={userLonin}>Login</button>

          </div>
        </div>
      </div>
    </>
  );
}
