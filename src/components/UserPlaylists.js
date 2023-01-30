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

  },[token])
// error too many requests, might have to make just one 
// maybe use multiple useeffects


  
  return (
    
    <div className='playlist-list-container '>
      <ul className='flex flex-col'>
        {data?.items ? data.items.map((item)=> <li onClick={() => {setActiveId(item.id); console.log(item.id, activeId)}} className={`playlist-list ${item.id === activeId ? 'bg-violet-700':null}`  } key={item.id} ><img className='playlist-album-img' src={item.images[0].url}></img><span className='my-auto'>{item.name}</span></li>): null}
      </ul>
    </div>					
  )
  
  
}

export default UserPlaylists