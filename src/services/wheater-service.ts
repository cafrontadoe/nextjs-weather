import axios from "axios";


export const fetchWeather =  (city: string) => {
    return  axios.get(`${process.env.WEATHER_HOST}/weather?q=${city}&units=imperial&appid=${process.env.API_KEY}`);
}   

export const fetchForecast =  (city: string) => {
    return  axios.get(`${process.env.WEATHER_HOST}/forecast?q=${city}&units=imperial&appid=${process.env.API_KEY}`);
}   