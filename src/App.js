import './App.css';
// import {useEffect, useState} from "react";
// import axios from "axios";
import Header  from "./components/Header"
import UserPlaylists from './components/UserPlaylists';
import Login from './components/Login';

function App() {  
  return (
    <div className="App">
        <Header/>
        {/* <Login/> */}
        <UserPlaylists/>
    </div>
  );
}

export default App;
