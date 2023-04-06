import React from "react";
import { convertToCelsius } from "@/utils/utils";
import Image from "next/image";
import CurrentDateTime from "../CurrentDateTime";
import { WeatherResponse } from "@/models/wheather-response.model";

const TempetureSkyWidget = ({ data }: { data: WeatherResponse }) => {
  const celsius = Number(convertToCelsius(data?.main?.temp.toFixed()).toFixed(0));

  const calculateAvatar = (): string => {
    if (celsius < 3) {
      return 'very-cold';
    } else if (celsius < 12) {
      return 'cold';
    } else if (celsius < 22) {
      return 'warm';
    } else if (celsius < 30) {
      return 'hot';
    }else  {
      return 'very-hot';
    }
  };

  return (
    <>
      <div className="location">
        <CurrentDateTime />
        <p>{data.name}</p>
      </div>
      <div className="temp">{data.main ? <h1>{celsius}°C</h1> : null}</div>

      {celsius  ? <div className="avatar-container">
        <Image
          src={`/weather-avatars/${calculateAvatar()}.png`}
          alt=""
          width={250}
          height={150}
        />
      </div> : null }
      <div className="description">
        Sky {data.weather ? <p>{data.weather[0].main}</p> : null}
        <div className="weather-icon">
          {data?.weather ? (
            <Image
              src={`/weather-icons/${data?.weather[0].icon}.png`}
              alt=""
              width={50}
              height={50}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export const MemoizedTempetureSkyWidget = React.memo(TempetureSkyWidget)
