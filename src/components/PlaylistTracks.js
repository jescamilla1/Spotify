import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
function PlaylistTracks() { // add props to get each playlist
  const [token, setToken] = useState("")
  const [tracks, setTracks] = useState({})

  const test_id = "0cFQ798107v4rScCoOMujI"
  const TRACKS_ENDPOINT = "https://api.spotify.com/v1/playlists/" + test_id +"/tracks"

  console.log(TRACKS_ENDPOINT)

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"))
  },[])
  
  const getTracks = async(e) =>{
    e.preventDefault()
    const {data} = await axios.get(TRACKS_ENDPOINT,{
      headers:{
        Authorization: `Bearer ${token}`
      },
    })
    console.log(data)
    setTracks(data)
  }
    
  return (
    <div>
      <button onClick={getTracks}>Get Tracks</button>
      {tracks?.items ? tracks.items.map((item)=> <p key = {item}>{item.track.name}</p>): null}
    </div>
  )
}

export default PlaylistTracks