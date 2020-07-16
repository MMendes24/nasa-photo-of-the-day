import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photos from './PhotoBuilder/PhotoBuilder'
import styled from 'styled-components'
import PageHeader from './StyleComponents/PageHeader'
import PageFooter from './StyleComponents/PageFooter'
import NavMenu from './StyleComponents/NavMenu'

const martianRed = '#a1251b'

const AppStyles = styled.div`
  width:80%;
  margin:0% 10%;
  font-family: Georgia;
  color: antiquewhite;
  background-color: ${martianRed}; 
  opacity:0.9;
  border: 10px solid black;
`

function App() {
const NASA_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-5-23&api_key=Qk9nJggwnMMmooGAW4JlbP5qotpE67j6TS05AmOW'
const [data, setData] = useState([])
// const [dataTwo, setDataTwo] = useState([])
  
useEffect(() => {
    axios.get(NASA_URL)
    .then(res => {
      console.log("We can hear you loud and clear, New Orleans!")
      setData(res.data.photos.slice(1, 4))
    })
    .catch(() => {
      console.log("Sorry New Orleans its all dark!")
    })
  },[]);

  // useEffect(() => {
  //   axios.get(NASA_URL)
  //   .then(res => {
  //     console.log("We can hear you loud and clear, New Orleans!")
  //     setDataTwo(res.data.photos.slice(84, 87))
  //   })
  //   .catch(() => {
  //     console.log("Sorry New Orleans its all dark!")
  //   })
  // },[]);

  return (
    <AppStyles className="App">
      <PageHeader />
      <NavMenu />
      <div className="Photo-Container">
        <Photos photos={data} />
        {/* <Photos photos={dataTwo} /> */}
      </div>
      <PageFooter />
    </AppStyles>
  );
}

export default App;
