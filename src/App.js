import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./styles.css";

import countries from "./countries";

export default function App() {
  const allCountries = countries.map((country) => {
    return <Card id={country.id} country={country} />;
  });

  return (
    <div className="container">
      <Header />
      <div className="cards">{allCountries}</div>
    </div>
  );
}
