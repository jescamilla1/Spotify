import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function PlaylistTracks() { 
  const [token, setToken] = useState("")
  const [tracks, setTracks] = useState({})

  // TODO: split the useffect into one that gets the token and has a token parameter adnd another that constantly checks


  useEffect(()=>{
    // to display the current playlist checked
    const test_id = localStorage.getItem("playlist_id")
    // TODO: check if env vars can maintain placeholders for string formatting
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
    <div className='overflow-auto max-h-screen'>
      {
        tracks?.items?tracks.items.map(( item )=>
          <li draggable className='playlist-list' key = {item.track.name}>
              <img className='w-9 h-full' src={item.track.album.images[0].url}></img>
              
              <span className='my-auto'> {item.track.name} </span>
          </li>
        ): null
      }
    </div>
  )
}

export default PlaylistTracks