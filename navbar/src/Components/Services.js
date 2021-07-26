import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Services = () => {
  const { web } = useParams();
  const location = useLocation();
//   console.log(location);
  return (
    <>
      <h1>This is services page</h1>
      <h2>This is {web}</h2>
      <h3>My current location is <span>{location.pathname }</span></h3>
      {location.pathname === `/services/web` ? (
      <button onClick={() => alert('You are on web services')}>Web Services</button>
      ):null}
    </>
  );

};

export default Services;
