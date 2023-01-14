import React from 'react'
import {useEffect, useState} from "react";
import SearchArtist from './SearchArtist';

function Login() {
    const CLIENT_ID = "d7da2bf996ca42cc8d58e8227ac1068b"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
  
    const [token, setToken] = useState("")

  
    useEffect(() => {
      // is localstorage the url path
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
  
      if (!token && hash){
        // parse the token from the window url
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        
        window.location.hash = ""
        window.localStorage.setItem("token", token)
        
      }
      setToken(token)
  
      console.log("from login"+ token)
      console.log(process.env)

  
    },[])
  
    const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }
  
    
  return (
    <div>
         {!token ?
        <button className='spotify-login-button'><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a></button>
          : <button className='spotify-login-button' onClick={logout}>Logout</button> 
        }
        {token ?

          <SearchArtist/>
          : <h2>Please Login</h2>
        }    
    </div>
  )
}

export default Login