import { useState } from "react";
import Searchbar from "./components/Searchbar"
import ResultsList from "./components/ResultsList"
import Navbar from "./components/Navbar";
import axios from "axios"

function App() {
  let proxy = "https://cors-anywhere.herokuapp.com/"
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  async function handleSearch(query) {
    try {

      setQuery(query);

      // first API request to get LONG / Lat
      let longLatData = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyBMBhOhkCQTNAIIntag10-_wqX-Ym08e1s`);
      let lat = longLatData.data.results[0].geometry.location.lat
      let lng = longLatData.data.results[0].geometry.location.lng

      // second API request (that uses Long/lat) to get nearby places of interest
      let response = await axios.get(`${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=50000&type=tourist_attraction&key=AIzaSyBMBhOhkCQTNAIIntag10-_wqX-Ym08e1s`)
      setResults(response.data.results);
    } catch (error) {
      console.error("error: " + error)
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <Searchbar onSearch={handleSearch} />
      <ResultsList results={results} />
    </div>
  )
}

export default App