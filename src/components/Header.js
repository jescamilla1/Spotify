import React from 'react';
import logo from '../images/Spotify_Logo_CMYK_Black.png';

import Login from './Login';
function Header() {
  return (
    <div className="header-container">
        <img className="logo" src={logo} alt="spotify logo"/><h2 className='spotify-font'>Playlist Editor</h2>
        <Login/>
    </div>
  )
}

export default Header