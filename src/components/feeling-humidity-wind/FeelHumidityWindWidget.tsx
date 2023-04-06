import { WeatherResponse } from "@/models/wheather-response.model";
import { convertToCelsius } from "@/utils/utils";
import React from "react";

const FeelHumidityWindWidget = ({ data }: { data: WeatherResponse }) => {
  return (
    <>
      <div className="feels">
        {data.main ? (
          <p className="bold">{convertToCelsius(data?.main?.temp.toFixed()).toFixed(0)}°C</p>
        ) : null}
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? (
          <p className="bold">{data.wind.speed.toFixed()} MPH</p>
        ) : null}
        <p>Wind Speed</p>
      </div>
    </>
  );
};

export const MemoizedFeelHumidityWindWidget = React.memo(FeelHumidityWindWidget);
