import './Prop.css'
import {CgProfile} from 'react-icons/cg';
import {GrLogout} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";

export function Prop({setedit ,propt}){

    const PF = "https://chat-appsamir.herokuapp.com/images/"
    const navigate = useNavigate()
    function logout(){
        sessionStorage.removeItem("user")
        navigate("/")

    }

    function displayEdit(){
       
  
        setedit(true)
    }

    return(
        <div className='Prop'>

            <div className='propName'>
                <div className='propCircle'>

                </div>
                <div className='propmainName'>
                    {JSON.parse(sessionStorage.getItem("user")).username}

                </div>

            </div>
            <div className='propProfile' onClick={displayEdit}>
                <CgProfile size={27}/>
                Profile

            </div>
            <div className='propLogout' onClick={logout}>
                <GrLogout color={'white'}/>
                Logout


            </div>


        </div>
    )
}