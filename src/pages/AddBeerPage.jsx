import React, { useState } from "react";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new";

function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBeerData({ ...beerData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(apiURL, beerData);
      console.log("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Add New Beer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={beerData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={beerData.tagline}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={beerData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed:</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer's Tips:</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By:</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
