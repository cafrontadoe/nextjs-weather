/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_HOST: 'https://api.openweathermap.org/data/2.5/weather',
    API_KEY: '97feb30313d7bd31d0130e2016e856ad',
  }
}

module.exports = nextConfig
