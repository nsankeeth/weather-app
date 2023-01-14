import React from 'react';
import '../styles/App.less';

function App() {
  return (
    <div className="App">
      <div className='d-flex justify-content-around'>
        <div className='button-container'>
        </div>
      </div>


      <div className="container-lg p-0 bg-white shadow rounded weather-container overflow-hidden">
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

export default App;
