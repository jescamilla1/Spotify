import React from 'react'
import {useState} from "react"
import axios from "axios"

function SearchArtist() {
    //TODO: add the oneffect to grab the token for search
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [token, setToken] = useState("")

    const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search"

    
    const searchArtists = async (e) => {
        setToken(window.localStorage.getItem("token"))

        e.preventDefault()
        const {data} = await axios.get( SEARCH_ENDPOINT, {
            headers:{
              Authorization: `Bearer ${token}`
            },
            params: {
              q: searchKey,
              type: "artist"
            }
        })
        // console.log(data)
        setArtists(data.artists.items)
    }
    
    const renderArtists = () => {
    return artists.map(artist => (
        <div className='search-artist-container' key={artist.id}>
          
          {
            artist.images.length ? 

            <img className="search-artist-image" width={"100%"} src={artist.images[0].url} alt =""/> : 
            <div>No Image</div>
          
          }
          
          <div className='search-artist-name'>
            {artist.name}
          </div>
        </div>
        ))
    }
      
      
  return (
    <div>
      <form onSubmit={searchArtists}>
        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        <button type={"submit"}>Search</button>
      </form>
      {renderArtists()}
    </div>

  )
}

export default SearchArtist