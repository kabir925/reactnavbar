import React, { useState } from "react";

const Navbar = () => {
  const [country, setcountry] = useState({
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
    <div className="hero">
      {/* First Dropdown */}
      <select
        // value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setcountry(e.target.value);
        }}
      >
        {Countries.map((item, index) => {
          return <option value={index}>{item.country}</option>;
        })}
      </select>

      {/* Second Dropdown */}
      <select
        // value={country}
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

export default Navbar;

