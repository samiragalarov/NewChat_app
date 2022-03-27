import { useState } from 'react'
import { Loginbox } from '../../component/Login-box/Loginbox'
import { Registerbox } from '../../component/Register-box/Registerbox'
import './Login.css'
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
  
export function Login(){
    const [loginorReg ,setLoginorreg] = useState(true);
    const [dark ,setDark] = useState(false);

    function setlogin(){
  
        setLoginorreg(true)

        setDark(false)
    }
    function setRegister(){
        setLoginorreg(false)
        setDark(true)
    }

    return(
        <div className='loginBox'>
            <div className='loginNav'>
                <div className={`loginBut ${dark ? null:'addDark'}`}  onClick={setlogin}>
                    Login

                </div>
                <div className={`registerBut ${dark ? 'addDark':null}`} onClick={setRegister}>
                    Register

                </div>

            </div>
            {
                loginorReg ? <Loginbox/> :  <Registerbox/>
            }
 
          

        </div>
    )
}