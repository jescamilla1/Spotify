import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'



function UserPlaylists() {
  const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"
  
  const [token, setToken] = useState("")
  const [data, setData] = useState({})


  const getPlaylists = async () => {
    const {data} = await axios.get(PLAYLISTS_ENDPOINT,{
      headers:{
        Authorization: `Bearer ${token}`
      },
    })
    console.log(data)
    setData(data)
  }

  useEffect(() => {
    setToken(window.localStorage.getItem("token"))
    getPlaylists();
  })



  
  return (
    
    <div>
        {data?.items ? data.items.map((item)=> <li>{item.name}</li>): null}
    </div>					
  )
  
  
}

export default UserPlaylists