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
    const {data} = await axios.get(PLAYLISTS_ENDPOINT,{
      headers:{
        Authorization: `Bearer ${token}`
      },
    })
    console.log(data)
    setData(data)

  }

  
  return (
    
    <div>
      <aside className='playlist-container'>
        <button className='text-justify content-center' onClick={getPlaylists}>Playlists</button>

        <div className='playlist-list-container'>
          <ul className='playlist-list-items'>
            {data?.items ? data.items.map((item)=> <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">{item.name}</li>): null}
          </ul>
        </div>
      </aside>
    </div>						
  )
  
  
}

export default UserPlaylists