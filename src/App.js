import './App.css';
import WeatherApp from './Components/weatherapp/WeatherApp';
import React from 'react';

function App() {
  return (
    <div className="App">
      <WeatherApp/>
    </div>
  );
}
document.body.style.background = 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)';

export default App;
