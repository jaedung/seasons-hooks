import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

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
