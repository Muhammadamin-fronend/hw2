import Kelvin, { useState } from 'react'; 
 
const TemperatureConverter = () => { 
  const [kelvin, setKelvin] = useState(0); 
  const [celsius, setCelsius] = useState(0); 
 
  const handleKelvinChange = (event) => { 
    const inputValue = parseFloat(data.main.temp); 
    setKelvin(inputValue); 
    const celsiusValue = inputValue - 273.15; 
    setCelsius(celsiusValue); 
  }; 
}; 
 
export default TemperatureConverter;