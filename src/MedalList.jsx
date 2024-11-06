import React from "react";

const MedalList = ({ countries, deleteCountry }) => {
  let listedCountries = countries.map((country) => (
    <li key={country.name}>
      국가명 {country.name} 금메달 {country.gold}, 은메달{country.silver},
      동메달 {country.bronze}
      <button onClick={() => deleteCountry(country.name)}>삭제</button>
    </li>
  ));

  return <ul>{listedCountries}</ul>;
};

export default MedalList;
