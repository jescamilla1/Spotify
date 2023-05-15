import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'



function UserPlaylists() {
  const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"

  const [token, setToken] = useState("")
  const [data, setData] = useState({})
  const [activeId, setActiveId] = useState('')


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

  }, [token])
// error too many requests, might have to make just one 
// maybe use multiple useeffects


  
  return (
    
    <div>
      <select className='select-playlist'>
        {
          data?.items?data.items.map((item)=> 
            <option onClick={ () => {
                  setActiveId(item.id); 
                  window.localStorage.setItem("playlist_id", item.id)
                }} 
            value={item.id} >
            {item.name}    
            </option>
          ): null
        }
      </select>
    </div>					
  )
  
  
}

export default UserPlaylists