import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API;

const getWeather = (location) => {
    
  return axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`)
}

export default getWeather;