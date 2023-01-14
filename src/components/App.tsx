import React from 'react';
import '../styles/App.less';

import TextButton from './TextButton'

interface Props {
}

interface State {
  city: string,
  weatherData: Array<any>
}

export default class App extends React.Component<Props, State> {
  cities = ['Ottawa', 'Moscow', 'Tokyo'];

  constructor(props: Props) {
    super(props);
    this.state = {
      city: this.cities[0],
      weatherData: []
    }
  }

  fetchWeatherData = (): void => {
    const apiKey = "";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data?.list?.length > 0) this.setState({ weatherData: data.list });
        else alert(`No weather found for "${this.state.city}"`);
      });
  }

  changeCity = (city: string): void => {
    this.setState({ city: city }, () => {
      this.fetchWeatherData();
    });
  }

  getCurrentWeatherData = () => this.state.weatherData[0];
  getWeatherIconURL = (): string => `http://openweathermap.org/img/wn/${this.state.weatherData[0].weather[0]?.icon}@2x.png`;
  kelvinToCelsius = (k: number) => (k - 273.15).toFixed(0);

  componentDidMount() {
    this.fetchWeatherData();
  }

  render() {
    return this.state.weatherData.length && (
      <div className="App main-container p-3">
        <div className='d-flex justify-content-around pt-3 pb-3'>
          {this.cities.map((city, index) => (
            <div className='button-container' key={index}>
              <TextButton
                className='text-uppercase'
                text={city}
                onClick={() => this.changeCity(city)}
                active={this.state.city == city} />
            </div>
          ))}
        </div>


        <div className="p-0 bg-white shadow rounded weather-container overflow-hidden">
          <div className="container-fluid current-day">
            <div className="pt-3 pb-3">
              <div className='fs-3 fw-lighter'>Today</div>
              <div className='w-50 p-3 m-auto d-flex'>
                <div className='w-50 float-start text-end'>
                  <img
                    className='h-100 w-auto'
                    src={this.getWeatherIconURL()}
                    alt="weather status icon"
                  />
                </div>
                <div className='w-50 float-end text-start'>
                  <h1 className='fw-bold display-5'>{this.kelvinToCelsius(this.getCurrentWeatherData().main.temp)} &deg;</h1>
                  <div className='fs-3 fw-lighter'>{this.getCurrentWeatherData().weather[0].main}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <div className="other-days">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}