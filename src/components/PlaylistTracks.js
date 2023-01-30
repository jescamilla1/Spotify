import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
function PlaylistTracks() { 
  // add props to get each playlist
  const [token, setToken] = useState("")
  const [tracks, setTracks] = useState({})

  


  useEffect(()=>{
    const test_id = localStorage.getItem("playlist_id")
    const TRACKS_ENDPOINT = "https://api.spotify.com/v1/playlists/" + test_id +"/tracks"

    const getTracks = async() =>{
      const {data} = await axios.get(TRACKS_ENDPOINT,{
        headers:{
          Authorization: `Bearer ${token}`
        },
      })
      // console.log(data)
      setTracks(data)
    }

    setToken(window.localStorage.getItem("token"))
    getTracks()
  })
  
    
  return (
    <div>
      {tracks?.items ? tracks.items.map((item)=>
        <li className='playlist-list' key = {item.track.name}><img className='w-9 h-full' src={item.track.album.images[0].url}></img><span className='my-auto'>{item.track.name}</span></li>
      ): null}
    </div>
  )
}

export default PlaylistTracks