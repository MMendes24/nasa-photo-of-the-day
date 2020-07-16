import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photos from './PhotoBuilder/PhotoBuilder'
import styled from 'styled-components'

const AppStyles = styled.div`
  width:80%;
  margin:10%;
  font-family: Georgia;
`

function App() {
const NASA_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-5-23&api_key=Qk9nJggwnMMmooGAW4JlbP5qotpE67j6TS05AmOW'
const [data, setData] = useState([])
  
useEffect(() => {
    axios.get(NASA_URL)
    .then(res => {
      console.log("We can hear you loud and clear, New Orleans!")
      console.log(res.data.photos[0].rover.name)
      setData(res.data.photos.slice(14, 20))
    })
    .catch(() => {
      console.log("Sorry New Orleans its all dark!")
    })
  },[]);

  return (
    <AppStyles className="App">
      <div className="Photo-Container">
        <Photos photos={data} rover={data} />
      </div>
    </AppStyles>
  );
}

export default App;
