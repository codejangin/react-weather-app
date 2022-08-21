import React, { Component } from "react";
import "./sass/App.css";
import InitLoading from "./components/initLoading";
import ChkLocation from "./components/chkLocation";
import ChkTemperature from "./components/chkTemperature";

const apiKey = "91bde6c831f9289840a9f9b3991f67e2";

class App extends Component {
  state = {
    long: "",
    lat: "",
    isLoading: true,
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
        console.log(apiUrl);
        fetch(apiUrl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.setState({
              isLoading: false,
              cityName: data.name,
              temperature: Math.floor(data.main.temp),
              description:
                data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1),
              weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              tempUnit: "F",
            });
          });
      });
    }
  };

  changeUnitHandler = (temp, unit) => {
    let celsius = (temp - 32) * (5 / 9);
    let fahrenheit = temp * (9 / 5) + 32;

    if (unit === "F") {
      this.setState({
        tempUnit: "C",
        temperature: Math.round(celsius),
      });
    } else if (unit === "C") {
      this.setState({
        tempUnit: "F",
        temperature: Math.round(fahrenheit),
      });
    }
  };

  render() {
    const {
      isLoading,
      cityName,
      temperature,
      description,
      weatherIcon,
      tempUnit,
    } = this.state;

    return (
      <React.Fragment>
        <InitLoading isLoading={isLoading} />
        <ChkLocation
          cityName={cityName}
          weatherIcon={weatherIcon}
          altText={description}
        />
        <ChkTemperature
          temperature={temperature}
          description={description}
          changeUnitHandler={this.changeUnitHandler}
          tempUnit={tempUnit}
        />
      </React.Fragment>
    );
  }
}

export default App;
