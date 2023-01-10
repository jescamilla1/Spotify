import React from 'react'
import logo from '../images/sp.png'
function Header() {
  return (
    <div>
        <img href={logo} alt="spotify logo"/><h2 className='spotify-font'>Spotify Playlist Editor</h2>
    </div>
  )
}

export default Header