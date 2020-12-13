import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const apiUrl = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";
      const res = await fetch(apiUrl);
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    console.log(eventData);
  }, []);
  return <div>{loading ? <Loader /> : <Map eventData={eventData} />}</div>;
}

export default App;
