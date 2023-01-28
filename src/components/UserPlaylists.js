import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'



function UserPlaylists() {
  const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"
  
  const [token, setToken] = useState("")
  const [data, setData] = useState({})




  useEffect(() => {
    const getPlaylists = async () => {
      const {data} = await axios.get(PLAYLISTS_ENDPOINT,{
        headers:{
          Authorization: `Bearer ${token}`
        },
      })
      console.log(data)
      setData(data)
    }

    setToken(window.localStorage.getItem("token"))
    getPlaylists();
  },[token])
// error too many requests, might have to make just one 
// maybe use multiple useeffects


  
  return (
    
    <div>
        {data?.items ? data.items.map((item)=> <li>{item.name}</li>): null}
    </div>					
  )
  
  
}

export default UserPlaylists