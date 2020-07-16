import React from "react"
import styled from 'styled-components'

const PhotoFooterStyles = styled.div`
background-color:black;
border: 5px solid antiquewhite;
padding-bottom: 2%;
width: 75%;

        h2 {
            font-size: 4rem;
            padding:3%;
            font-style: italic;
            color: black;
            background-color: antiquewhite;
            border-bottom: 5px solid black;
        }

        h3 {
            font-size: 1.5rem;
            padding:3%;
            font-style: italic;
            text-decoration: underline;
        }

        p {
            padding:2% 0%;
            font-size: 1.2rem;
        }

`

const PhotoSubheading = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
   
`

const PhotoFooter = props => {

    return (
        <PhotoFooterStyles className="header-div">
            <h2 className="rover-name">{props.name}</h2>
            <PhotoSubheading >
            <h3 className="camera-name">Camera Used:</h3>
            <p>{props.full_name}</p>
            <h3 className="earth-date">Earth Date Taken:</h3>
            <p>{props.date}</p>
        </PhotoSubheading>
    </PhotoFooterStyles>
    )
}

export default PhotoFooter