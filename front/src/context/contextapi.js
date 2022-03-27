import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export  const AppContext = createContext();

const { Provider } = AppContext;

export const  AppProvider = (props) => {
    const [user ,Setuser] = useState(false)
    const [ userimage ,SetImage] = useState("")

    
  
    

     useEffect(()=>{
     
       const username =  sessionStorage.getItem("Isuser",true)
       if(username){
          Setuser(true)
          console.log(username)


          

       }else{
           Setuser(false)
   
       }
       

      
    },[])
    


return(

   <Provider value={{currentUser :[user ,Setuser] ,userimg :[ userimage ,SetImage]}}>

      {props.children}

   </Provider>

 );

}