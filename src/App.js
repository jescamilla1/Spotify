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
        <div className='playlist-editor-container'>
          <div className='left-playlist-container'>
            <UserPlaylists/>
          </div>
          <div className='tracks-container'>
           <PlaylistTracks/>
          </div>
          <div className='right-playlist-container'>
            <UserPlaylists/>
          </div>
        </div>
        {/* <Login/> */}

    </div>
  );
}

export default App;
