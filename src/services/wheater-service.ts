import axios from "axios";

export const fetchWeather = async (city: string) => {
    return await axios.get(`${process.env.WEATHER_HOST}?q=${city}&units=imperial&appid=${process.env.API_KEY}`);
}   