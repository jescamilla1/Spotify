import './App.css';
// import {useEffect, useState} from "react";
// import axios from "axios";
import Header  from "./components/Header"
import UserPlaylists from './components/UserPlaylists';
import Login from './components/Login';
import PlaylistTracks from './components/PlaylistTracks';

function App() {  
  return (
    <div className="App">
        <Header/>
        {/* <Login/> */}
        <UserPlaylists/>
        <PlaylistTracks/>
    </div>
  );
}

export default App;
