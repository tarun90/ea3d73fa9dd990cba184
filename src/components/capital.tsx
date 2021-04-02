import React from "react";

type Props = {
  selectedCountry: any;
  capitalData: any;
  showCountryCapital: React.ReactEventHandler<HTMLButtonElement>
};

const Capital: React.FC<Props> = ({ selectedCountry, capitalData, showCountryCapital}) => {
  return (
    <div className="capital">
      <div style={{ display: "inline-flex" }}>
        <div style={{ marginRight: "10px" }}>
          <img
            src={selectedCountry.flag}
            alt="country flag"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p>Country Name: {selectedCountry.name}</p>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population}</p>
        </div>
      </div>
      <div>
        <button type="button" onClick={showCountryCapital}>
          Capital Weather
        </button>
      </div>
      {capitalData && (
        <div style={{ display: "inline-flex", marginTop: "20px" }}>
          <div style={{ marginRight: "10px" }}>
            <img
              src={capitalData.weather_icons[0]}
              alt="weather icons"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p>Temperature: {capitalData.temperature}</p>
            <p>Wind speed: {capitalData.wind_speed}</p>
            <p>Precipation: {capitalData.precip}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Capital;
