import axios from 'axios'
import { useEffect, useState } from 'react'

//component
import Weather from './component/Weather'

//style
import styles from './component/Style.module.css'

const KEY = 'b719d7c58f5133459b841f0fd5892b39'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

function App() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Nigeria')

  const getData = async () => {
    const response = await axios.get(
      `${BASE_URL}weather?q=${query}&units=metric&APPID=${KEY}`,
    )
    return response.data
  }

  useEffect(() => {
    const fetch = async () => {
      const value = await getData()
      setData(value)
    }
    fetch()
  }, [query])

  const keyHandler = (event) => {
    if (event.key === 'Enter') {
      setQuery(search)
      setSearch('')
    }
  }

  return (
    <div
      className={
        typeof data.main != 'undefined' && data.main.temp < 16
          ? styles.coldBody
          : styles.warmBody
      }
    >
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={keyHandler}
          placeholder="Search..."
        />
      </div>
      {typeof data.main != 'undefined' ? (
        <Weather
          name={data.name}
          short={data.sys.country}
          degree={data.main.temp}
          air={data.weather[0].main}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default App
