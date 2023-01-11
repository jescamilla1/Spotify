import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";

function Login() {
    const CLIENT_ID = "d7da2bf996ca42cc8d58e8227ac1068b"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
  
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
  
  
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
  
    },[])
  
    const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }
  
    const searchArtists = async (e) => {
      e.preventDefault()
      const {data} = await axios.get("https://api.spotify.com/v1/search",{
        headers:{
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "artist"
        }
      })
  
      // console.log(data)
      setArtists(data.artists.items)
  
    }
  
    const renderArtists = () => {
      return artists.map(artist => (
        <div className='search-artist-container' key={artist.id}>
          {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt =""/> : <div>No Image</div>}
          {artist.name}
        </div>
      ))
    }
    
  return (
    <div>
         {!token ?
        <button className='spotify-login-button'><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a></button>
          : <button className='spotify-login-button' onClick={logout}>Logout</button> 
        }
        {/* {console.log(token)} */}
        {token ?
          <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>  
          </form>

          : <h2>Please Login</h2>
        }    
        {renderArtists()}
    </div>
  )
}

export default Login