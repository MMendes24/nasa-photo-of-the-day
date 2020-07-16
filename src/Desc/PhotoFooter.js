import React from "react"
import styled from 'styled-components'

const PhotoFooterStyles = styled.div`
background-color:black;

        h2 {
            font-size: 1.5rem;
            padding:5%;
            font-style: italic;
        }

        h3 {
            font-size: 1.2rem;
            padding:1%;
            font-style: italic;
        }

        p {
            padding:2% 0%;
        }

        span {
            text-decoration: underline;
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
            <h2 className="rover-name"><span>Rover:</span> {props.name}</h2>
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