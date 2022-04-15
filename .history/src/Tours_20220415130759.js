import React from "react";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <duv className="underline"></duv>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tours.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
