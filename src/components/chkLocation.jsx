import React from "react";

function ChkLocation({ cityName, weatherIcon, altText }) {
  return (
    <div className="location">
      <h1 className="location-city">{cityName}</h1>
      <div className="weather-icon">
        <img src={weatherIcon} alt={altText} />
      </div>
    </div>
  );
}

export default ChkLocation;
