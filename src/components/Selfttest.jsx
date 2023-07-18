import React, { useState } from "react";
const Selftest = () => {
  const [country, setCountry] = useState({
    country: "",
    value: "",
    cities: [],
  });

  const Countries = [
    {
      country: "India",
      value: "In",
      cities: ["Telangana", "AndhraPradesh", "Rajasthan", "Maharashtra"],
    },
    {
      country: "Pakistan",
      value: "Pak",
      cities: ["Pak-One", "Pak-Two", "Pak-Three"],
    },
  ];

  return (
    <div>
      {/* First Drop down */}
      <select
        onChange={(e) => {
          console.log(e.target.value);
          console.log(setCountry(e.target.value));
          //   console.log(country)
        }}
      >
        {Countries.map((item, index) => {
          return <option value={index}>{item.country}</option>;
        })}
      </select>
      {/* Second Drop down */}
      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        {Countries[country] &&
          Countries[country].cities.map((item, index) => {
            return <option value={index}>{item}</option>;
          })}
      </select>
    </div>
  );
};
export default Selftest;
