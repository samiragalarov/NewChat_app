import './Registerbox.css'
import { useState } from 'react'
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export function Registerbox() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
          const res = await axios.post("https://chat-appsamir.herokuapp.com/register", {
            username,
            password,
          });
          console.log(res)
          window.location.replace("/")
          
        } catch (err) {
            console.log(err)
    
        }
      };
    return (
        <div className='loginMain'>
            <div className='forInput1'>
                <input placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
    

            </div>
            <div className='forInput2'>
              <input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>

            </div>
            <div className="loginSubmit">
                <button onClick={handleSubmit}>Register</button>

            </div>

        </div>

    )
}