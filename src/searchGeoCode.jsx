
import React from "react";

function searchGeoCode(){
    return(

        <body>
    <h1>Geocoding API Search</h1>
    <input type="text" id="search-input" placeholder="Enter location"/>
    <button id="search-button">Search</button>
    <div id="results"></div>

    <script src="searchGeoCode.js"></script>
</body>
    )
}
export default searchGeoCode