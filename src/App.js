import "./App.css";
import Input from "./components/Input";
import DateComponent from "./components/Date";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    console.log(weather);
  }, [weather]);
  return (
    <div className="App container" style={{ fontFamily: "Raleway" }}>
      <DateComponent />
      <Input setWeather={setWeather} />
    </div>
  );
}

export default App;
