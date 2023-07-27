import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
    return (

    <div className="page">
        <div className="homeBox">
            <h1>Welcome to the Best Beer database</h1>
            <Link to={`/allBeers`}>
                <p>Check our complete Beer Collection</p>
            </Link>
            <Link to={`/randomBeer`}>
                <p>Feeling Adventurous?</p>
            </Link>
            <Link to={`/addBeer`}>
                <p>Add a new Beer</p>
            </Link>
        </div>
    </div>

    )
}

export default HomePage;
