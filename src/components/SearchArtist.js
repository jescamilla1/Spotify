import React from 'react'

function SearchArtist() {
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search",{
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
        {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt =""/> : <div>No Image</div>}
        {artist.name}
        </div>
        ))
    }
      
      
  return (
    <div>SearchArtist</div>
  )
}

export default SearchArtist