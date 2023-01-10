import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'



function UserPlaylists() {
  // const [userId, setUserId] = useState("")

  useEffect(() => {
    let token = window.localStorage.getItem("token")
    console.log(token)

    const getUserId = async () => {

      const {response} = await axios.get("https://api.spotify.com/v1/me",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
    }

    getUserId()

  })

  return (
    
    <div>UserPlaylists

    </div>						
  )
  
  
}

export default UserPlaylists