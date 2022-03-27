import './App.css';
import { Chat } from './pages/chat_page/Chat';
import { Login } from './pages/login_page/Login';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { Context } from './context/Context';


function App() {

  const { user } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
              <Route path="/"  element={ <Login /> } />
              <Route path="/chat" element = {user ?   <Chat/>:<Navigate to = "/" />}/> 
        </Routes>
      </BrowserRouter>,

    </div>
  );
}

export default App;
