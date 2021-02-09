import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${
          process.env.REACT_APP_WEATHER_KEY
        }&query=${country.capital || country.name}}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country.capital, country.name]);

  if (Object.keys(weather).length === 0 || !weather.current) {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => {
            return <li key={language.name}>{language.name}</li>;
          })}
        </ul>
        <img
          src={country.flag}
          alt={`flag of ${country.name}`}
          width="100"
          height="100"
        />
        <h3>Weather in {country.capital}</h3>
        <p>Searching for weather data...</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => {
            return <li key={language.name}>{language.name}</li>;
          })}
        </ul>
        <img
          src={country.flag}
          alt={`flag of ${country.name}`}
          width="100"
          height="100"
        />
        <h3>Weather in {country.capital}</h3>
        <p>temperature: {weather.current.temperature}</p>
        <img
          src={weather.current.weather_icons[0]}
          alt={`${country.name}'s current weather icon}`}
        />
        <p>
          Wind {weather.current.wind_speed} mph direction{" "}
          {weather.current.wind_dir}
        </p>
      </div>
    );
  }
};

export default Country;
