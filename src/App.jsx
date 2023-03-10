import { useState,useRef } from 'react'
import {TextField,Button, Stack} from '@mui/material/'
import ForecastList from './components/ForecastList'
import axios from 'axios'
import './App.css'

const API_KEY = 'XXX';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
function App() {
  const textRef = useRef();
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  

  function cleanRenderedState(){
    setError(null);
    setForecast(null);
  }

  async function handleAjax(fieldType,fieldValue){
    return await axios.get(`${BASE_URL}?${fieldType}=${fieldValue}&appid=${API_KEY}`);
  }
  async function manipulteForDaysNeeded(list){
    const res = list.filter((w,i) => i % 8 === 0);
    return res;
  }

  async function handleSubmit(){
    try{
      cleanRenderedState();
      const [fieldType , fieldValue] =  handleInputType();
      const response = await handleAjax(fieldType,fieldValue);
      const daysForecast = await manipulteForDaysNeeded(response.data.list);
      setForecast(daysForecast);
    }catch(error){
      setError(error);
    }
  }

  function handleInputType(){
  let fieldType ;
    const fieldValue = textRef.current.value;
    if(/\d/.test(fieldValue)){
      fieldType= 'zip';
    }else{
      fieldType = 'q';
    }
    return [fieldType ,fieldValue] ;
  }
  
  return (
    <>
    <h1>Weather App</h1>
    <Stack direction="row" spacing={2}>
    <TextField   label="Enter City or Zip Code" variant="outlined"  inputRef={textRef}  />
    <Button variant="outlined" onClick={handleSubmit}>Search</Button>
    </Stack>
    {error && <p>Something went wrong</p>}
    <ForecastList forecast={forecast}/>
    </>
  )
}

export default App;
