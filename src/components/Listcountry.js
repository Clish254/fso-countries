import React, { useState } from "react";
import Country from "./Country";

const Listcountry = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(true);
  };
  if (showDetails) {
    return (
      <>
        <Country country={country} />
      </>
    );
  } else {
    return (
      <>
        <li>{country.name}</li>
        <button onClick={handleClick}>show</button>
      </>
    );
  }
};

export default Listcountry;
