import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photos from './PhotoBuilder/PhotoBuilder'

function App() {
const NASA_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-5-23&api_key=Qk9nJggwnMMmooGAW4JlbP5qotpE67j6TS05AmOW'
const [photo, setPhotos] = useState([])
  
useEffect(() => {
    axios.get(NASA_URL)
    .then(res => {
      console.log("We can hear you loud and clear, New Orleans!")
      console.log(res.data.photos[0].img_src)
      setPhotos(res.data.photos)
    })
    .catch(() => {
      console.log("Sorry New Orleans its all dark!")
    })
  },[]);

  return (
    <div className="App">
      <div className="Photo-Container">
        <Photos photos={photo} />
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
