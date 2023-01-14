import React from 'react';
import '../styles/App.less';

import TextButton from './TextButton'

interface Props {
}

interface State {
  city: string
}

export default class App extends React.Component<Props, State> {
  cities = ['Ottawa', 'Moscow', 'Tokyo'];

  constructor(props: Props) {
    super(props);
    this.state = {
      city: this.cities[0]
    }
  }

  render() {
    return (
      <div className="App main-container p-3">
        <div className='d-flex justify-content-around pt-3 pb-3'>
          {this.cities.map((city, index) => (
            <div className='button-container' key={index}>
              <TextButton
                className='text-uppercase'
                text={city}
                onClick={() => this.setState({ city: city })}
                active={this.state.city == city} />
            </div>
          ))}
        </div>


        <div className="p-0 bg-white shadow rounded weather-container overflow-hidden">
          <div className="container-fluid current-day">
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