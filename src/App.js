import './App.css';
import {useEffect, useState} from "react";
// import axios from "axios";
import Header  from "./components/Header"
import UserPlaylists from './components/UserPlaylists';
// import Login from './components/Login';
import PlaylistTracks from './components/PlaylistTracks';

function App() {  
  // TODO: make the container conditional based on token existance
  const [token, setToken] = useState("")
  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])
  
  return (
    <div className="App">
        <Header/>
        <div>
          { token ?
            <div>
                <UserPlaylists/>
                <UserPlaylists/>
              <div className='tracks-container mt-0'>
                <PlaylistTracks/>
              </div>
                
            </div>
            :
            <div className='h-screen flex'>
              <h1 className='text-3xl'>Please Login to use Spotify Playlist Editor</h1>
            </div>
          } 
        </div>
          
        {/* <Login/> */}
    </div>
  );
}

export default App;
