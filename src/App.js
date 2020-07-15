import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
const nasaURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-5-23&api_key=Qk9nJggwnMMmooGAW4JlbP5qotpE67j6TS05AmOW'
  useEffect(() => {
    axios.get(nasaURL)
    .then((nasaURL) => {
      console.log("We can hear you loud and clear, New Orleans!")
      console.log(nasaURL.data)
    })
    .catch(() => {
      console.log("Sorry New Orleans its all dark!")
    })
  })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
