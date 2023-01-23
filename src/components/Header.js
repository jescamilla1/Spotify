import React from 'react';
import logo from '../images/spotify-logo-white.png';

import Login from './Login';
function Header() {
  return (
    <div className="header-container">
        <img className="logo" src={logo} alt="spotify logo"/><h2 className='spotify-font'>Spotify Playlist Editor</h2>
        <Login/>
    </div>
  )
}

export default Header