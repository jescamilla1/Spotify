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
        <div className='secondary-color'>
          <div className='left-box'><p className='text-center'>Playlist</p></div>
          <div className='center-box'></div>
          <div className='right-box'></div>
        </div>
          <UserPlaylists/>
          <PlaylistTracks/>
        {/* <Login/> */}

    </div>
  );
}

export default App;
