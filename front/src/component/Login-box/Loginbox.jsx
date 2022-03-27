import './Loginbox.css';
// import { AppContext, AppProvider } from "../../context/contextapi"
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Context } from '../../context/Context';

export function Loginbox() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const { user,dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try{
            const res = await axios.post('https://chat-appsamir.herokuapp.com/login',{
                username,
                password
            });
            console.log(res)

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/chat")
 
            
      

        }catch(err){
            dispatch({ type: "LOGIN_FAILURE" });
   
            
           console.log(err)

        }
    }

    console.log(user)
    return (
        <div className='loginMain'>
            <div className='forInput1'>
                <input placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
    

            </div>
            <div className='forInput2'>
              <input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>

            </div>
            <div className="loginSubmit">
                <button onClick={handleSubmit}>Login</button>

            </div>

        </div>

    )
}