import React, { useEffect, useState } from 'react'

const CurrentDateTime = () => {

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    getCurrentDate();
  });

  const getCurrentDate = () => {
    let today = new Date();
    setCurrentDate(
      `${today.toLocaleDateString(
        "en-US",
        options
      )} ${today.toLocaleTimeString()}`
    );
  };
  
  return <h4 className='current-date'>{currentDate}</h4>;
}

export default CurrentDateTime