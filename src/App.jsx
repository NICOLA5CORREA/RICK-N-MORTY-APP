import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './servers/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [location, setLocation] = useState()

  useEffect(() => {
    const url= `https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`
      axios.get (url)
        .then (res => setLocation(res.data))
        .catch (err => console.log(err))
    }, [])
    

    return (
      <>
        <div>
          <h1>Rick n' Morthy App</h1>
          <LocationInfo 
          location={location}
          />

          <div>
            {
              location?.residents.map(url => (
                <ResidentCard 
                key={url}
                url={url}
                />
              ))
            }
          </div>
        </div>
      </>
    )
  }

export default App

