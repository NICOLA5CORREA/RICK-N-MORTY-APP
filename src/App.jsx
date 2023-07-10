import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './servers/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import rickmorty from './assets/rick-morty.png'
// import Pages from './components/Pages'

function App() {

  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    setIsLoading (true)
      axios.get (url)

        .then (res => {
          setLocation(res.data)
          setHasError(false)
        })

        .catch (err => {
          console.log(err)
          setHasError  (true)
        })

        .finally(() => {
          setIsLoading(false)
        })

    }, [idLocation])
    

    return (
        <div className="total-container">
          <img className="header-image" src={rickmorty} alt="header" />
          <FormLocation 
            setIdLocation={setIdLocation}
          />
          {
            isLoading 
            ? (<h2>Loading...</h2>)
            : (
              hasError
              ? (<h1>❌ Hey! you must provide an Id from 1 to 126 😵‍💫</h1>)
              : (
                <section className="total-info">
                  <LocationInfo 
                  location={location}
                  />
                  <div className='resident-container'>
                    {
                      location?.residents.map(url => (
                        <ResidentCard 
                        key={url}
                        url={url}
                        />
                      ))
                    }
                  </div>
                </section>
              )
            )}
        </div>
  )
}


export default App
