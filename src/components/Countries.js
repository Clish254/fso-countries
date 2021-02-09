import React from "react";
import Listcountry from "./Listcountry";
import Country from "./Country";

const Countries = ({ countries, filter }) => {
  if (filter !== "") {
    const matches = [];
    countries.forEach((country) => {
      const filterPresent = country.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      if (filterPresent) {
        matches.push(country);
      }
    });
    if (matches.length > 1 && matches.length <= 10) {
      return (
        <div>
          {matches.map((country) => {
            return <Listcountry key={country.name} country={country} />;
          })}
        </div>
      );
    } else if (matches.length === 1) {
      return <Country country={matches[0]} />;
    } else {
      return (
        <div>
          <p>Too many matches, specify another filter.</p>
        </div>
      );
    }
  }
  return (
    <div>
      <p>No search results to show</p>
    </div>
  );
};

export default Countries;
