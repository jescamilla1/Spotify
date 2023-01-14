import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'



function UserPlaylists() {
  const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"
  
  const [token, setToken] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    setToken(window.localStorage.getItem("token"))
  },[])

  const getPlaylists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/me/playlists",{
      headers:{
        Authorization: `Bearer ${token}`
      },
    })

    // console.log(data)
    setData(data)

  }


  
  return (
    
    <div>
      <button onClick={getPlaylists}>Get Playlists</button>
    </div>						
  )
  
  
}

export default UserPlaylists