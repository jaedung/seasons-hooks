import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.log(error)
//   );

//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME we do direct assignment to this.state
  //   this.state = {
  //     lat: null,
  //     errorMessage: ""
  //   };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  renderContent = () => {
    if (this.state.errorMessage !== "" && this.state.lat === null) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.errorMessage === "" && this.state.lat !== null) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  };

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
