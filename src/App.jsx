import { useState,useRef } from 'react'
import {TextField,Button, Stack} from '@mui/material/'

import './App.css'

function App() {
  const textRef = useRef();
  const API_KEY = 'dc350a4d62c5eda7e3adc31cb1df51b8'
  const [forecast, setForecast] = useState(null)

  async function handleSubmit(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textRef.current.value}&appid=${API_KEY}`)
    const data = await response.json()
    setForecast(data)
    console.log(data)
  }
  return (
    <>
    <h1>Weather App</h1>
    <Stack direction="row" spacing={2}>
    <TextField   label="Enter City or Zip Code" variant="outlined"  inputRef={textRef}  />
    <Button variant="outlined" onClick={handleSubmit}>Search</Button>
    </Stack>
    </>
  )
}

export default App
