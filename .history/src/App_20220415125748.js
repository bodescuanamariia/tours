import React, { useState, useEffect } from "react";

const url = 
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
  }

  try {
    const response = await fetch(url)
  }
  return;
}

export default App;
