import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";

const App = () => {
  const [countries, setCountries] = useState([]);

  const deleteCountry = (countryName) => {
    setCountries(countries.filter((country) => countryName !== country.name));
  };

  const addCountry = (newCountry) => {
    setCountries((countries) => {
      const newestCountries = [...countries, newCountry];
      newestCountries.sort((a, b) => b.gold - a.gold);
    });
  };

  const modifyCountry = (modifiedCountry) => {
    setCountries((countries) => {
      countries.map((country) => {
        country.name === modifiedCountry.name
          ? { ...country, ...modifiedCountry }
          : country;
      });
    });
  };

  return (
    <div>
      <MedalForm addCountry={addCountry} modifyCountry={modifyCountry} />
      <MedalList countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
};

export default App;
