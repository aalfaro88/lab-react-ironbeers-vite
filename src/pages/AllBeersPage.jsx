import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [fetching, setFetching] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log("Initial Render");
    axios.get(apiURL).then((response) => {
      setBeers(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="all-beers-container">
      <h2>Our Beer Collection</h2>
      <br />
      <div className="beer-list">
        {beers.map((beer) => (
          <div key={beer._id} className="beer-card">
            <p className="beer-name">{beer.name}</p>
            <img className="beer-image" src={beer.image_url} alt={beer.name} />
          </div>
        ))}
      </div>
      {fetching && <p>Beers are loading!!!</p>}
    </div>
  );
}

export default AllBeersPage;
