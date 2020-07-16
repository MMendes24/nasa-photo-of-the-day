import React from "react"
import styled from 'styled-components'

const aliceBlue = '	#F0F8FF'

const HeaderStyles = styled.div`
    background-color: ${aliceBlue};
    margin: 2%;

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.2rem;
        }
`

const PhotoHeader = props => {

    return (
        <HeaderStyles className="header-div">
            <h2 className="rover-name">Rover: {props.name}</h2>
            <h3 className="camera-name">Camer: {props.full_name}</h3>
            <h3 className="camera-name">Date: {props.date}</h3>
            {console.log(props)}
        </HeaderStyles>
    )
}

export default PhotoHeader