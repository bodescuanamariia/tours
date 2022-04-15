import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  return;
}

export default App;
