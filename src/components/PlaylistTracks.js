import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
function PlaylistTracks() { 
  // add props to get each playlist
  const [token, setToken] = useState("")
  const [tracks, setTracks] = useState({})

  const test_id = "0cFQ798107v4rScCoOMujI"
  const TRACKS_ENDPOINT = "https://api.spotify.com/v1/playlists/" + test_id +"/tracks"

  console.log(TRACKS_ENDPOINT)

  useEffect(()=>{
    const getTracks = async() =>{
      const {data} = await axios.get(TRACKS_ENDPOINT,{
        headers:{
          Authorization: `Bearer ${token}`
        },
      })
      setTracks(data)
    }

    setToken(window.localStorage.getItem("token"))
    getTracks()
  },[token])
  
    
  return (
    <div>
      {tracks?.items ? tracks.items.map((item)=> <li className='playlist-list' key = {item}>{item.track.name}</li>): null}
    </div>
  )
}

export default PlaylistTracks