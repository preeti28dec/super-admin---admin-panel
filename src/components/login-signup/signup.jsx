import React, { useState } from "react";
import { Link } from 'react-router-dom'


function Signup() {
    const [roll, setRoll] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");
    // const [date,setDate] = useState(new Date());

    function onSignup() {
        const saveData = JSON.parse(localStorage.getItem("userRegister") || "[]");
        const obj = {
            // key: date,
            roll:roll,
            name: name,
            email: email,
            password: Password,
        };

        saveData.push(obj);
        localStorage.setItem("userRegister", JSON.stringify(saveData));
        setName("");
        setEmail("");
        setPassword("");

    }

    
    return (
        <div className="login">
            <div className="border border-slate-200 p-12 bg-slate-200 rounded login1">
                <div className="text-center text-3xl font-bold py-6"> sign up</div>
                <div className="text-center mt-2">
                    <input value={roll} onChange={e => setRoll(e.target.value)} type="text" placeholder="Roll" />
                </div>
                <div className="text-center mt-2">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Email" />
                </div>
                <div className="text-center mt-2">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="password" placeholder="Password" />
                </div>
                <div className="text-center mt-2" >
                    <input value={Password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                </div>
                <div>
                    <Link to="/" className='text-blue-400 text-sm ml-2'>Go back to login here </Link>
                </div>
                <div className="text-center mt-4" >
                    <button className="bg-blue-300 py-2 px-4 rounded" type="button" onClick={onSignup}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
