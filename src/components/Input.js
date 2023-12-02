import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const Input = ({ setWeather }) => {
  const [coords, setCoords] = useState({});
  const [cityInput, setCityInput] = useState("");
  const API_KEY = "7a57e0eb094bf63e8e3fef9c28de69bd";

  //Function to fetch coords of the city that the user is interested in
  const fetchCoords = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data) {
        setCoords({
          lat: data[0].lat,
          lng: data[0].lon,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(coords);
  }, [coords]);

  useEffect(() => {
    if (coords.lat && coords.lng) {
      const fetchWeather = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setWeather(data.list);
      };
      fetchWeather();
    }
  }, [coords.lat, coords.lng, setWeather]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchCoords(cityInput);
    }
  };
  //Input handler
  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <>
      <div className="input-group flex-nowrap" style={{ marginTop: "2rem" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          aria-label="City"
          aria-describedby="addon-wrapping"
          value={cityInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        ></input>
      </div>
    </>
  );
};
export default Input;
