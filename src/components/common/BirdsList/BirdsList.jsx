import React from "react";
import BirdCard from "../BirdCard/BirdCard";

const BirdsList = ({ birdsList, next, country }) => {
  return (
    <div className="space-y-9">
      <h3 className="color-2">Birds in “{country}”</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-10 md:px-3 lg:px-0">
        {birdsList?.recordings.slice(0, next).map((bird) => (
          <li key={bird.id}>
            <BirdCard bird={bird} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirdsList;
