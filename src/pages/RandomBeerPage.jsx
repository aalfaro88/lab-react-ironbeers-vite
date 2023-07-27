import React, { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeersPage() {
  const [fetching, setFetching] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log("Initial Render");
    axios.get(apiURL).then((response) => {
      setBeers(response.data);
      setFetching(false);
    });
  }, []);

  let randomBeerNum = Math.floor(Math.random() * beers.length);

  return (
    <div className="random-beers-container">
      <h2>Our Beer Collection</h2>
      <br />
      <div className="beer-details">
        {beers.length > 0 && (
          <div key={beers[randomBeerNum]._id} className="beer-card">
            <p className="beer-name">{beers[randomBeerNum].name}</p>
            <img
              className="beer-image"
              src={beers[randomBeerNum].image_url}
              alt={beers[randomBeerNum].name}
            />
          </div>
        )}
      </div>
      {fetching && <p>Beers are loading!!!</p>}
    </div>
  );
}

export default RandomBeersPage;
