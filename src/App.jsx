import React, { useState, useEffect } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
  }, []);

  let content;

  if (errorMessage !== "" && lat === null) {
    content = <div>Error: {errorMessage}</div>;
  }

  if (errorMessage === "" && lat !== null) {
    content = <SeasonDisplay lat={lat} />;
  }

  if (errorMessage === "" && lat === null) {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

export default App;
