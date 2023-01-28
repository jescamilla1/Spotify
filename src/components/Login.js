import React from 'react'
import {useEffect, useState} from "react";

function Login() {
    // used for axios request
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
    },[])
  
    const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }
  
  return (
    <div>
        {!token ?
        <button className='spotify-button '><a href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a></button>
          : <button className='spotify-button' onClick={logout}>Logout</button> 
        }
    </div>
  )
}

export default Login