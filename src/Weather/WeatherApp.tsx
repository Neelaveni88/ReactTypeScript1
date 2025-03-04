import React, { useEffect, useState } from 'react';
import './Weather.css';
import SearchIcon from '../assets/Search2.png';
import WeatherIcon from '../assets/Weather.png';
import HumidityIcon from '../assets/Humidity_icon.png';
import WindIcon from '../assets/wind.png';

interface WeatherData {
  humidity: number;
  windSpeed: number;
  temperature: number;
  city: string;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>('London');
  const [searchInput, setSearchInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const search = async (city: string) => {
    try {
      setError('');
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError('City not found');
        setWeatherData(null);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        city: data.name,
      });
    } catch (error) {
      setError('An error occurred while fetching data');
    }
  };

  useEffect(() => {
    search(city);
  }, []);

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      setCity(searchInput);
      search(searchInput);
    }
  };

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input 
          type='text' 
          placeholder='Search' 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img src={SearchIcon} alt='Search' onClick={handleSearch} className='cursor-pointer' />
      </div>
      {error && <p className='error-message'>{error}</p>}
      {weatherData && (
        <>
          <img src={WeatherIcon} alt='Weather' className='weather-icon' />
          <p style={{ color: 'white', fontSize: '80px', lineHeight: '1' }}>{weatherData.temperature}°C</p>
          <p className='location'>{weatherData.city}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={HumidityIcon} alt='Humidity' />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className='col'>
              <img src={WindIcon} alt='Wind Speed' />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
