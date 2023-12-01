import { useEffect, useState } from "react";
import "../App.css";
const DateComponent = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    //Clear interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return <div className="date">{date.toLocaleString()}</div>;
};
export default DateComponent;
//date.toLocaleString - coverts date object to string format
