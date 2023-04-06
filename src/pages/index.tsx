import { useEffect, useState } from "react";
import { fetchWeather } from "@/services/wheater-service";
import SearchCity from "@/components/SearchCity";
import { AxiosError } from "axios";
import { MemoizedTempetureSkyWidget } from "@/components/tempeture-sky/TempetureSkyWidget";
import { MemoizedFeelHumidityWindWidget } from "@/components/feeling-humidity-wind/FeelHumidityWindWidget";
import { WeatherResponse } from "@/models/wheather-response.model";

export default function Home() {
  const DEFAULT_CITY = "Heidenheim";

  const [data, setData] = useState<WeatherResponse>({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    callWeatherService(DEFAULT_CITY);
  }, []);

  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      callWeatherService(location);
      setLocation("");
    }
  };

  const callWeatherService = (place: string) => {
    fetchWeather(place)
      .then((response) => {
        setData(response.data);
      })
      .catch((e: AxiosError) => {
        alert('Place not found');
      });
  };

  const updateLocation = (event: any) => {
    setLocation(event);
  };

  return (
    <>
      <div className="app">
        <div className="search">
          <SearchCity
            location={location}
            updateLocation={updateLocation}
            searchLocation={searchLocation}
          />
        </div>

        <section className="container">
          <section className="top">
            <MemoizedTempetureSkyWidget data={data} />
          </section>

          <section className="bottom">
            <MemoizedFeelHumidityWindWidget data={data} />
          </section>
        </section>
      </div>
    </>
  );
}
